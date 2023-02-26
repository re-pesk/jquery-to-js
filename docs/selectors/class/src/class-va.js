const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq('.myclass.otherclass').forEach((element) => (element.style.border = '13px solid red'));
