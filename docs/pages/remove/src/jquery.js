import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

$('button').click(() => {
  $('p').remove(`:contains('Hello')`);
});