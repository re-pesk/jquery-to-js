const q = (selector, context) => (context || document).querySelector(selector);
const qq = (selector, context) => (context || document).querySelectorAll(selector);

q('button').onclick = () => {
  qq('p').forEach(element => (element.textContent.includes('Hello') && element.remove()));
};