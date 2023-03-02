import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

let arr = [ 1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1 ];
$('div').text(arr.join(', '));

arr = $.grep(arr, (n, i) => (n !== 5 && i > 4));
$('p').text(arr.join(', '));

arr = $.grep(arr, a => (a !== 9));
$('span').text(arr.join(', '));
