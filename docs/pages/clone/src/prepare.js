document.querySelector('head > title').innerHTML = 'clone demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<b>Hello, </b><b>John</b>
<p>, how are you?</p>`;
