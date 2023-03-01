document.querySelectorAll('label + input').forEach((element) => {
  element.style.color = 'blue'
  element.value = 'Labeled!'
});
