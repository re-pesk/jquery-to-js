document.querySelector('head > title').innerHTML = 'All demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<div>DIV</div>
<span>SPAN</span>
<p>P <button>Button</button></p>`;
