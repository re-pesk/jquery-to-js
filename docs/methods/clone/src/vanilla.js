const q = (selector, context) => (context || document).querySelector(selector);
const qq = (selector, context) => (context || document).querySelectorAll(selector);

q('p').prepend(...Array.from(qq('b')).map(element => element.cloneNode(true)));

/* or

NodeList.prototype.__proto__ = Array.prototype;

q('p').prepend(...qq('b').map(element => element.cloneNode(true)));

*/
