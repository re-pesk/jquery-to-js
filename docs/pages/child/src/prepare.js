document.querySelector('head > title').innerHTML = 'Child demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<ul class="topnav">
<li>Item 1</li>
<li>Item 2
  <ul>
    <li>Nested item 1</li>
    <li>Nested item 2</li>
    <li>Nested item 3</li>
  </ul>
</li>
<li>Item 3</li>`;
