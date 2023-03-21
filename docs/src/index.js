import { loadParser } from './load-markdown-it.js';

const q = (selector, context) => (context || document).querySelector(selector);
const qq = (selector, context) => (context || document).querySelectorAll(selector);
NodeList.prototype.__proto__ = Array.prototype;

// const marked  = window.marked;
const metaData = {};
const mdParser = loadParser(metaData);

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
  const viewerFile = `${window.location.origin}${window.location.pathname}`;

  // If prefix does not empty, insert it to beginning of url
  if (url === '"/"') {
    return `${attrName}${document.baseURI}`;
  }

  if (url.match(/^"\?\/[^.]+\.md"$/)) {
    url = url.replace(/(?<=")(\?)\/([^.]+\.md)(?=")/, `${viewerFile}$1$2`);
    return `${attrName}${url}`;
  }

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
const { path, fileName } = splitPathName(searchString);
if (searchString) {
  prefix = path;
  url = window.location.toString();
} else {
  url = `${window.location.toString()}${mdFileName}`;
}
const regexp = new RegExp(`${mdview}\\?`);
const fileToLoad = url.replace(regexp, '');
const mdContent = await getContent(fileToLoad);
let htmlContent = mdParser.render(mdContent);

htmlContent = htmlContent.replaceAll(/(href=)("[^"]*")/g, replacer);
htmlContent = htmlContent.replaceAll(/(src=)("[^"]*")/g, replacer);

if (prefix || fileName !== last) {
  htmlContent = `<div class="navbar"><a href="/${basePath}/">Home</a></div>${htmlContent}`;
}

q('#content').innerHTML = htmlContent;

document.querySelectorAll('a')
  .filter((element) => (element.innerText.startsWith('#')))
  .forEach((element) => {
    if (element.innerText.startsWith('#>')) {
      document.querySelector('.navbar').append(' » ');
      element.innerText = element.innerText.slice(2);
      document.querySelector('.navbar').append(element);
      return;
    }
    document.querySelector('.navbar').append(' | ');
    element.innerText = element.innerText.slice(1);
    document.querySelector('.navbar').append(element);
    return;
});

loadSrc('#content', prefix);

