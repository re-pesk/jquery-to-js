const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq('p').forEach(para => {
  qq('span', para).forEach(span => (span.textContent = 'Hello'));
  para.style.border = '2px solid blue';
})
