const qq = (selector, context) => (context || document).querySelectorAll(selector);

Array.from(qq('div'))
  .reduce((children, div) => [...children, ...div.children], [])
  .filter(child => child.className.includes('selected'))
  .forEach(child => (child.style.color = 'blue'));

/* or

NodeList.prototype.__proto__ = Array.prototype;

qq('div')
  .reduce((children, div) => [...children, ...div.children], [])
  .filter(child => child.className.includes('selected'))
  .forEach(child => (child.style.color = 'blue'));

*/