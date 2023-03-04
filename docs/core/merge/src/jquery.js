import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

const first = [ "a", "b", "c" ];
const second = [ "d", "e", "f" ];
$('#result').text($.merge($.merge([], first), second).join(', ')).css('color', 'red');
