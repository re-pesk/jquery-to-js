import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

const arr = ['one', 'two', 'three', 'four', 'five'];
const obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };

$.each(arr, (index, value) => {
  $(`#${value}`).text(`Mine is ${value}.`);

  // Will stop running after 'three'
  return (value !== 'three');
});

$.each(obj, (key, value) => {
  $(`#${key}`).append(document.createTextNode(` - ${value}`));
});
