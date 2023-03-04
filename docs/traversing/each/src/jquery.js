import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

$(document.body).click(() => {
  $('div').each((index, element) => {
    if ( element.style.color !== 'blue' ) {
      element.style.color = 'blue';
    } else {
      element.style.color = '';
    }
  });
});