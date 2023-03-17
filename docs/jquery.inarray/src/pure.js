const arr = [ 4, 'Pete', 8, 'John' ];
const $spans = document.querySelectorAll('span');
$spans[0].textContent = arr.indexOf('John');
$spans[1].textContent = arr.indexOf(4);
$spans[2].textContent = arr.indexOf('Karl');
$spans[3].textContent = arr.includes('Pete');
$spans[4].textContent = arr.indexOf('Pete', 2);