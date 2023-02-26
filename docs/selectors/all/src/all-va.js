const q = (selector, context) => (context || document).querySelector(selector);
const qq = (selector, context) => (context || document).querySelectorAll(selector);

const elements = qq('*');
elements.forEach((element) => (element.style.border = '3px solid red'));
const h3 = document.createElement('h3');
h3.innerHTML = `${elements.length} elements found`;
q('body').prepend(h3);
