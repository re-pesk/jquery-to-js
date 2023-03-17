document.querySelector('head > title').innerHTML = 'animated demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<button id="run">Run</button>

<div></div>
<div id="jqmover"></div>
<div id="vamover" class="transitional"></div>
<div></div>`;
