const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq('div, span, p.myClass').forEach((element) => (element.style.border = '3px solid red'));
