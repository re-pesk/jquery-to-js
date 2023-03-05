document.querySelector('head > title').innerHTML = 'find demo';

const body = document.querySelector('body');
body.innerHTML = `
<div><p><span>Hello</span>, how are you?</p></div>
<div><p>Me? I'm <span>good</span>.</p></div>
<div><span>This is text outside conversation.</span></div>
`;
