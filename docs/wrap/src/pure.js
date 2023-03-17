document.querySelectorAll('p').forEach(element => {
  const div = document.createElement('div');
  div.style.border = '1px solid blue';
  element.parentNode.insertBefore(div, element);
  div.appendChild(element);
})

