document.querySelector('head > title').innerHTML = 'tagname demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<div>DIV1</div>
<div>DIV2</div>
<span>SPAN</span>`;
