document.querySelectorAll('div').forEach((element, index) => {
  if (index > 0 && element.classList.contains('yellow')) {
    element.classList.add('green');
  }
});

if (document.querySelectorAll('div.yellow.green').length === 1) {
  document.querySelector('p').textContent = 'There is one green div';
}
