document.querySelectorAll('div' ).forEach(
  div => div.querySelectorAll('p span').forEach(
    element => (element.style.color = 'blue')
  )
);
