const elements = document.querySelectorAll('*');
elements.forEach((element) => (element.style.border = '3px solid blue'));
const h3 = document.createElement('h3');
h3.innerHTML = `${elements.length} elements found`;
document.querySelector('body').prepend(h3);
