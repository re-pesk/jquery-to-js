import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

$('div')
  .css('background', '#c8ebcc')
  .filter('.middle')
  .css('border-color', 'red');