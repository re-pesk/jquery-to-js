import 'https://code.jquery.com/jquery-3.6.3.js';
const $ = window.$;

const arr = [ 4, 'Pete', 8, 'John' ];
const $spans = $('span');
$spans.eq(0).text($.inArray('John', arr));
$spans.eq(1).text($.inArray(4, arr));
$spans.eq(2).text($.inArray('Karl', arr));
$spans.eq(3).text($.inArray('Pete', arr) > -1);
$spans.eq(4).text($.inArray('Pete', arr, 2));
