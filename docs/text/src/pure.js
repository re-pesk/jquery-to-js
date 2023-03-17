const str = document.querySelector('p:first-of-type').textContent;
document.querySelector('p:last-of-type').textContent = `${str} <b>Some</b> new text.`;
