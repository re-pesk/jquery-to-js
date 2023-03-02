import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

const str = '         lots of spaces before and after         ';
$('#original').html(`Original String: '${str}'`);
$('#trimmed').html(`$.trim()'ed: '${$.trim(str)}'`);
