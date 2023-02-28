const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq('ul.topnav > li').forEach((element) => (element.style.border = '3px double blue'));
