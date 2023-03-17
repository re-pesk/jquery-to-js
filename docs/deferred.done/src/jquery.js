import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

const par = $('p');
const button = $('button');

const fn1 = () => par.append(' 1 ');
const fn2 = () => par.append(' 2 ');
const fn3 = (n) => par.append(n + ' 3 ' + n);

// Create a deferred object
const dfd = $.Deferred();

// Add handlers to be called when dfd is resolved
dfd
  // .done() can take any number of functions or arrays of functions
  .done([fn1, fn2], fn3, [fn2, fn1])
  // We can chain done methods, too
  .done((n) => $('p').append(n + ' we\'re done.'));

// Resolve the Deferred object when the button is clicked
button.on('click', () => dfd.resolve('and'));