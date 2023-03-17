import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

let newText = $('p').text().split(' ').join('</span> <span>');
newText = `<span>${newText}</span>`;

$('p')
  .html(newText)
  .find('span')
  .mouseenter((event) => {
    $(event.target).addClass('hilite');
  })
  .mouseleave((event) => {
    $(event.target).removeClass('hilite');
  })
  .end()
  .find(`:contains('t')`)
  .css({
    'font-style': 'italic',
    'font-weight': 'bolder'
  });