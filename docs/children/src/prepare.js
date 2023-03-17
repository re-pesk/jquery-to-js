document.querySelector('head > title').innerHTML = 'children demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<div>
<span>Hello</span>
<p class="selected">Hello Again</p>
<div class="selected">And Again</div>
<p>And One Last Time</p>
</div>`;
