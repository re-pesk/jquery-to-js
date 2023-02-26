const q = (selector, context) => (context || document).querySelector(selector);

q('#myDiv').style.border = '3px solid red';
