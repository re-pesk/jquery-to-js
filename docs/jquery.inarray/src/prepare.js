document.querySelector('head > title').innerHTML = 'jQuery.inArray demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `
<div>"John" found at <span></span></div>
<div>4 found at <span></span></div>
<div>"Karl" not found, so <span></span></div>
<div>Is "Pete" in the array? <span></span></div>
<div>"Pete" is in the array, but not at or after index 2, so <span></span></div>
`;
