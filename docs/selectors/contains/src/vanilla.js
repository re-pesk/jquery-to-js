const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq('div').forEach((element) => (element.innerText.includes('John')) && (element.style.textDecoration = 'underline'));
