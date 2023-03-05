const div = document.createElement('div');
div.style.border = '2px solid blue';
const ps = document.querySelectorAll('p')
ps[0].parentNode.insertBefore(div, ps[0]);
ps.forEach((element) => {
  div.appendChild(element);
})

