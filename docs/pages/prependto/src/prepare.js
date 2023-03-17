document.querySelector('head > title').innerHTML = 'prependTo demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<div id="foo">FOO!</div>
<span>I have something to say... </span>`;
