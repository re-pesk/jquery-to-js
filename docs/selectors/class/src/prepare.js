document.querySelector('head > title').innerHTML = 'class demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<div class="myclass">div class="notMe"</div>
<div class="myclass otherclass">div class="myClass"</div>
<span class="myclass otherclass">span class="myClass"</span>`;
