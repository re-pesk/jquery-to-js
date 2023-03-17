document.querySelector('head > title').innerHTML = 'each demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `
<div>Click here</div>
<div>to iterate through</div>
<div>these divs.</div>
`;
