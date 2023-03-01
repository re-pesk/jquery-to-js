document.querySelector('button').onclick = () => {
  document.querySelectorAll('p').forEach(element => (element.textContent.includes('Hello') && element.remove()));
};