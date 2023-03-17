document.querySelector('head > title').innerHTML = 'find demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `
<p>
  When the day is short
  find that which matters to you
  or stop believing
</p>
`;
