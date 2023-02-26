const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq('label + input').forEach((element) => {
  element.style.color = 'blue'
  element.value = 'Labeled!'
});
