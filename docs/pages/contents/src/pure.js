[...document.querySelector('p').childNodes]
  .filter((element) => (element.nodeType !== Node.ELEMENT_NODE))
  .forEach((element) => {
    const wrapper = document.createElement('b');
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
  })

document.querySelectorAll('p > b').forEach((element) => (element.style.color = 'blue'));
