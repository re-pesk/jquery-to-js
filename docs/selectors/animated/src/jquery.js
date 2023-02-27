import 'https://code.jquery.com/jquery-3.6.3.js';

const $ = window.jQuery;

$( "#run" ).click(function() {
  $( "div:animated" ).toggleClass( "colored" );
});
 
function animateIt() {
  $( "#mover" ).slideToggle( 1000, animateIt );
}
 
animateIt();