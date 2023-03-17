const arr = ['one', 'two', 'three', 'four', 'five'];
const obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };

let run = 'true';
arr.forEach((value) => {
  if (!run) return;

  document.querySelector(`#${value}`).textContent = `Mine is ${value}.`;

  // Will stop running after 'three'
  run = (value !== 'three');
});

Object.entries(obj).forEach(([key, value]) => {
  document.querySelector(`#${key}`).append(document.createTextNode(` - ${value}`));
});
