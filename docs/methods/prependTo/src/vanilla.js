const q = (selector, context) => (context || document).querySelector(selector);

q('#foo').prepend(q('span'));