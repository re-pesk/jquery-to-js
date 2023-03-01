Array.from(document.querySelectorAll('div'))
  .reduce((children, div) => [...children, ...div.children], [])
  .filter(child => child.className.includes('selected'))
  .forEach(child => (child.style.color = 'blue'));
