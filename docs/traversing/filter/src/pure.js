[...document.querySelectorAll('div')]
  .map(element => {
    element.style.background = '#c8ebcc';
    return element;
  })
  .filter(element => element.className === 'middle')
  .forEach(element => (element.style.borderColor = 'blue'));
