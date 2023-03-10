fetch('test.js').finally(() => {
  document.querySelector('#output').textContent = 'fetch() completed with success or error callback arguments';
});