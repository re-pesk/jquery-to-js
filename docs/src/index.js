import { loadParser } from './load-markdown-it.js';

const q = (selector, context) => (context || document).querySelector(selector);
const qq = (selector, context) => (context || document).querySelectorAll(selector);

// const marked  = window.marked;
const metaData = {};
const mdParser = loadParser(metaData);

/*
    Node.prototype.on = Node.prototype.addEventListener;
    window.on = window.addEventListener;

    // eslint-disable-next-line no-proto
    NodeList.prototype.__proto__ = Array.prototype;

    // eslint-disable-next-line no-multi-assign, func-names
    NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
      this.forEach((elem) => {
        elem.on(name, fn);
      });
    }.bind(NodeList.prototype);
 */
async function getContent(url) {
  return await fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
      }
      return response.text();
    });
}

function splitPathName(pathName = window.location.pathname) {
  const pathArray = pathName.split('/');
  const fileName = pathArray.pop();
  const path = pathArray.join('/');
  return { path, fileName };
}

function replacer(str, attrName, urlArg) {
  let url = urlArg;

  // If url string starts with http(s), it is a link to external resource. Add 'target="_blank"' and return
  if (url.startsWith(`"http`)) {
    return `${attrName}${url} target="_blank"`;
  }

  // If prefix does not empty, insert it to beginning of url
  if (prefix && !url.startsWith('"/')) {
    url = url.replace(/(?<=")(\??)([^"]*)(?=")/, `$1${prefix}/$2`);
  }

  // If url string has character sequence without '/' and '"'' characters, 
  // followed by '/../' string, replace them all with './' string
  if (url.includes('/../')) {
    url = url.replace(/[^?"/]+\/\.\.\//g, './');
  }

  // If url string starts with '"?' string and ends with '/"' string, it is a default search string to certain directory.
  // Add 'target="_blank"' and return
  if (url.startsWith('"?') && url.endsWith('/"')) {
    url = url.replace(/([^?/]+)\/(?=")/, '$1/index.md');
    url = url.replace(/\.\//, '');
    return `${attrName}${url}`;
  }

  // If url string does not start with '?' and ends with '.hmtl', it is link to local page. Add 'target="_blank"' and return
  if (attrName === 'href=' && url.charAt(1) !== '?' && url.includes('.html')) {
    return `${attrName}${url} target="_blank"`;
  }

  return `${attrName}${url}`;
}

function loadSrc(contextStr, prefix) {
  if (!contextStr) {
    throw new Error('Context name cannot be empty!');
  }
  const context = q(contextStr);
  ['css', 'js', 'html'].forEach(langName => {
    const langClassName = `language-${langName}`;
    const codeTagList = qq(`code[class^="${langClassName}:"]`, context);
    codeTagList.forEach(element => {
      const classList = element.classList.value.split(' ');
      const classIndex = classList.findIndex(element => element.match(new RegExp(`^${langClassName}:`)));
      const oldClassName = classList[classIndex];
      element.classList.replace(oldClassName, langClassName);

      const src = oldClassName.split(':')[1];
      fetch(`${prefix}/${src}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
          }
          return response.text();
        }).then((text) => (element.textContent = text));
    });
  })
}

const baseNo = 1;
const mdview = 'mdview.html';
const { pathname } = window.location;
const splittedPath = pathname.split('/');
const basePath = splittedPath.slice(1, baseNo + 1).join('/');
const last = `index.md`;

const mdFileName = `?${last}`;
let url = '';
let prefix = '';
const searchString = window.location.search.slice(1);
if (searchString) {
  prefix = splitPathName(searchString).path;
  url = window.location.toString();
} else {
  url = `${window.location.toString()}${mdFileName}`;
}
const regexp = new RegExp(`${mdview}\\?`);
const fileToLoad = url.replace(regexp, '');
const mdContent = await getContent(fileToLoad);
let htmlContent = mdParser.render(mdContent);

if (prefix) {
  htmlContent = `<div class="back"><a href="/${basePath}/">Home</a> | <a href="../">Up</a></div>${htmlContent}`;
}
htmlContent = htmlContent.replaceAll(/(href=)("[^"]*")/g, replacer);
htmlContent = htmlContent.replaceAll(/(src=)("[^"]*")/g, replacer);
q('#content').innerHTML = htmlContent;
loadSrc('#content', prefix);

