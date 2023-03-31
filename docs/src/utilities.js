export const htmlToElement = (htmlArg) => {
  const template = document.createElement('template');
  const html = htmlArg.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
};
