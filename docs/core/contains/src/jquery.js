import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

if ($.contains(document.querySelector('#one'), document.querySelector('#three'))) {
  $('#three').css('color', 'red');
}
