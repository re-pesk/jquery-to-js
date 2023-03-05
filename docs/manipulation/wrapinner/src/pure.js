document.querySelectorAll('p').forEach(element => {
  element.childNodes.forEach((child) => {
    const b = document.createElement('b');
    element.insertBefore(b, child);
    b.appendChild(child);
  });
  element.style.border = '2px solid blue';
})
