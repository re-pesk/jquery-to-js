document.querySelector('head > title').innerHTML = 'id demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<div id="notMe"><p>id="notMe"</p></div>
<div id="myDiv">id="myDiv"</div>`;
