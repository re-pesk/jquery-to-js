const str = '         lots of spaces before and after         ';
document.querySelector('#original').innerHTML = `Original String: '${str}'`;
document.querySelector('#trimmed').innerHTML = `.trim()'ed: '${str.trim()}'`;
