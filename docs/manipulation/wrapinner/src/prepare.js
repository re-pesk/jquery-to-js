document.querySelector('head > title').innerHTML = 'wrapInner demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `
<p>Hello</p>
<p>cruel</p>
<p>World</p>
`;
