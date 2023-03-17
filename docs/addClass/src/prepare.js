document.querySelector('head > title').innerHTML = 'addClass demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `
<div class="yellow">This div should be yellow because it has the "yellow" class</div>
 <div class="yellow">This div will be green because it now has the "green" and "yellow" classes.
   It would be yellow if the addClass function failed</div>
 <div class="green">This div should be white because it has only the "green" class</div>
 <p>There are zero green divs</p>
`;
