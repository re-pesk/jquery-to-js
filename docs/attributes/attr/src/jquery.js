import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.jQuery;

$('input')
  .change(function () {
    const $input = $(this);
    $('p').html(`
      .attr( "checked" ): <b>${$input.attr('checked')}</b><br />
      .prop( "checked" ): <b>${$input.prop('checked')}</b><br />
      .is( ":checked" ): <b>${$input.is(':checked')}</b>
    `);
    $('p > b').css('color', 'red');
  })
  .change();

$('div')
  .attr('id', (index) => `div-id${index}`)
  .each((i, _this) => $('span', _this).html(`(id = <b>${_this.id}</b>)`));

$('span').css('color', 'red');
