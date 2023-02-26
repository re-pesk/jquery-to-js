const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq('#prev ~ div').forEach((element) => (element.style.border = '3px groove blue'));
