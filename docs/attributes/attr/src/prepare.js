document.querySelector('head > title').innerHTML = 'attr demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `
<input id="check1" type="checkbox" checked="checked">
<label for="check1">Check me</label>
<p></p>
<br />
<div>Zero-th <span></span></div>
<div>First <span></span></div>
<div>Second <span></span></div>
`;
