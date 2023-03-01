import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

const str = $('p').first().text();
$('p').last().text(`${str} <b>Some</b> new text.`);