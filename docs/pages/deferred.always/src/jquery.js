import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

$.get('test.js').always(() => {
  $('#output').text( "$.get completed with success or error callback arguments" );
});