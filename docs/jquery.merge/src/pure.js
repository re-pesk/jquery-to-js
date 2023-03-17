const first = [ "a", "b", "c" ];
const second = [ "d", "e", "f" ];
const result = document.querySelector('#result');
result.textContent = ([...first, ...second].join(', '));
result.style.color = 'blue';