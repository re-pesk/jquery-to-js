let arr = [ 1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1 ];
document.querySelector('div').textContent = arr.join(', ');

arr = arr.filter((n, i) => (n !== 5 && i > 4));
document.querySelector('p').textContent = arr.join(', ');

arr = arr.filter(a => (a !== 9));
document.querySelector('span').textContent = arr.join(', ');