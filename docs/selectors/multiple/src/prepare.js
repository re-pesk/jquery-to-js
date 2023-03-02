document.querySelector('head > title').innerHTML = 'multiple demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<div>div</div>
<p class="myClass">p class="myClass"</p>
<p class="notMyClass">p class="notMyClass"</p>
<span>span</span>`;
