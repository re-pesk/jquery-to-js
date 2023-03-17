/*
import MarkdownIt from 'markdown-it';
import FrontMatter from 'markdown-it-front-matter';
// import Metadata from 'markdown-it-metadata-block';
import Sub from 'markdown-it-sub';
import Sup from 'markdown-it-sup';
import Footnote from 'markdown-it-footnote';
import Deflist from 'markdown-it-deflist';
import Abbr from 'markdown-it-abbr';
import Emoji from 'markdown-it-emoji';
import Container from 'markdown-it-bracketed-spans';
import BracketSpan from 'markdown-it-container';
import Insert from 'markdown-it-ins';
import Mark from 'markdown-it-mark';
import Admon from 'markdown-it-admon';
import MmdTable from 'markdown-it-multimd-table';
import YamlTable from 'markdown-it-complex-table';
import GridTable from 'markdown-it-gridtables';
import Attrs from '@sup39/markdown-it-attr';
import { asidePlugin as Aside } from '@humanwhocodes/markdown-it-markua-aside';
import Anchor from 'markdown-it-anchor';
// import Toc from 'markdown-it-table-of-contents';
import TocDoneRight from 'markdown-it-toc-done-right';
// import Replacements from 'markdown-it-replacements';
import YAML from 'yaml';
*/

import MarkdownIt from './markdown-it/markdown-it.bundle.js';
import FrontMatter from './markdown-it/markdown-it-front-matter.bundle.js';
// import Metadata from 'markdown-it-metadata-block';
import Sub from './markdown-it/markdown-it-sub.bundle.js';
import Sup from './markdown-it/markdown-it-sup.bundle.js';
import Footnote from './markdown-it/markdown-it-footnote.bundle.js';
import Deflist from './markdown-it/markdown-it-deflist.bundle.js';
import Abbr from './markdown-it/markdown-it-abbr.bundle.js';
import Emoji from './markdown-it/markdown-it-emoji.bundle.js';
import Container from './markdown-it/markdown-it-bracketed-spans.bundle.js';
import BracketSpan from './markdown-it/markdown-it-container.bundle.js';
import Insert from './markdown-it/markdown-it-ins.bundle.js';
import Mark from './markdown-it/markdown-it-mark.bundle.js';
import Admon from './markdown-it/markdown-it-admon.bundle.js';
import MmdTable from './markdown-it/markdown-it-multimd-table.bundle.js';
import YamlTable from './markdown-it/markdown-it-complex-table.bundle.js';
import GridTable from './markdown-it/markdown-it-gridtables.bundle.js';
import Attrs from './markdown-it/markdown-it-attr.bundle.js';
import { asidePlugin as Aside } from './markdown-it/markdown-it-markua-aside.bundle.js';
import Anchor from './markdown-it/markdown-it-anchor.bundle.js';
// import Toc from 'markdown-it-table-of-contents';
import TocDoneRight from './markdown-it/markdown-it-toc-done-right.bundle.js';
// import Replacements from 'markdown-it-replacements';
import YAML from './markdown-it/yaml.bundle.js';

// const Aside = asidePlugin;

export const moduleDataList = [
  ['MarkdownIt', MarkdownIt],
  ['FrontMatter', FrontMatter],
  // ['Metadata', Metadata],
  ['Sub', Sub],
  ['Sup', Sup],
  ['Footnote', Footnote],
  ['Deflist', Deflist],
  ['Abbr', Abbr],
  ['Emoji', Emoji],
  ['Container', Container],
  ['BracketSpan', BracketSpan],
  ['Insert', Insert],
  ['Mark', Mark],
  ['Admon', Admon],
  ['MmdTable', MmdTable],
  ['YamlTable', YamlTable],
  ['GridTable', GridTable],
  ['Attrs', Attrs],
  ['Aside', Aside],
  ['Anchor', Anchor],
  // ['Toc', Toc],
  ['TocDoneRight', TocDoneRight],
  // ['Replacements', Replacements],
  ['YAML', YAML],
];

export const modules = Object.fromEntries(moduleDataList);

export const moduleOptionList = {
  MarkdownIt: { html: true, xhtmlOut: true, linkify: true, typography: true },
  // Metadata: { parseMetadata: YAML.load, meta },
  Container: "spoiler",
  MmdTable : { multiline: true, rowspan: true, headerless: true, multibody: true, autolabel: true },
  Anchor: { permalink: Anchor.permalink.headerLink() },
  // Anchor: { permalink: modules.Anchor.permalink.linkInsideHeader({ symbol: '$', placement: 'before' }) },
  YAML: { defer: true },
}

// modules.Replacements.replacements.push({
//   name: 'allcaps',
//   re: /^Bandymas$/g,
//   sub: function (s) { return '# ' + meta.title; },
//   default: true
// });

export const loadParser = (metaData) => {

  moduleOptionList.FrontMatter = (fm) => { 
    if (fm) {
      metaData['frontMatter'] = YAML.parse(fm);
    }
  };

  moduleOptionList.TocDoneRight = { callback(html) {
    if (html) {
      metaData['toc'] = html;
    }
  }};

  const mdParser = new MarkdownIt({
    html: true,        // Enable HTML tags in source
    xhtmlOut: true,
    linkify: true,
    typography: true,
  })

  moduleDataList.forEach(moduleData => {
    if (moduleOptionList[moduleData[0]]) {
      if (moduleOptionList[moduleData[0]].defer) {
        return;
      }
      mdParser.use(modules[moduleData[0]], moduleOptionList[moduleData[0]])
    } else {
      mdParser.use(modules[moduleData[0]])
    }
  })

  return mdParser;
}

export default { loadParser, modules };