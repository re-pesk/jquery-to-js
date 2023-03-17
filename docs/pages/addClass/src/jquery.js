import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

$('div').addClass(function (index, currentClass) {
  const addedClassArray = [];

  if (index > 0 && currentClass === 'yellow') {
    addedClassArray.push('green');
  }

  return addedClassArray;
});

if ($('div.yellow.green').length === 1) {
  $('p').text('There is one green div');
}