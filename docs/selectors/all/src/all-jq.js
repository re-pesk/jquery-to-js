import 'https://code.jquery.com/jquery-3.6.3.js';

const $ = window.jQuery;

const elements = $('*');
const elementCount = elements.css('border', '3px solid red').length;
$('body').prepend(`<h3>${elementCount} elements found</h3>`);
