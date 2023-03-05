document.querySelector('head > title').innerHTML = 'filter demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `
<div></div>
<div class="middle"></div>
<div class="middle"></div>
<div class="middle"></div>
<div class="middle"></div>
<div></div>
`;
