document.querySelectorAll('p').forEach(para => {
  document.querySelectorAll('span', para).forEach(span => (span.textContent = 'Hello'));
  para.style.border = '2px solid blue';
})
