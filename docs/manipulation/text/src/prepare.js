document.querySelector('head > title').innerHTML = 'text demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<p><b>Test</b> Paragraph. <b hidden>Other test</b></p>
<p></p>`;
