document.querySelector('head > title').innerHTML = 'remove demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<p class="hello"><span>Hello</span>, </p>
how are
<p>you?</p>
<button>Call remove(":contains('Hello')") on paragraphs</button>`;
