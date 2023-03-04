import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

$('p')
  .contents()
  .filter((index, element) => (element.nodeType !== Node.ELEMENT_NODE))
  .wrap('<b></b>');

$('p').find('b').css('color', 'red');
