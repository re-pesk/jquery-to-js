const q = (selector, context) => (context || document).querySelector(selector);
const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq("form input").forEach((element) => (element.style.border = '2px dotted blue'));
q("form fieldset input").style.backgroundColor = 'cyan';
