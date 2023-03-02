document.querySelector('head > title').innerHTML = 'end demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<p><span></span>, how are you?</p>`;
