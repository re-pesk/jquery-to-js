const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq('div').forEach((element) => (element.style.border = '9px solid blue'));
