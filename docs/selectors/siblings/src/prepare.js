document.querySelector('head > title').innerHTML = 'siblings demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<div>div (doesn't match since before #prev)</div>
<span id="prev">span#prev</span>
<div>div sibling</div>
<div>div sibling <div id="small">div niece</div></div>
<span>span sibling (not div)</span>
<div>div sibling</div>`;
