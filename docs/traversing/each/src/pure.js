document.body.onclick = () => {
  document.querySelectorAll('div').forEach((element) => {
    if ( element.style.color !== 'blue' ) {
      element.style.color = 'blue';
    } else {
      element.style.color = '';
    }
  });
};
