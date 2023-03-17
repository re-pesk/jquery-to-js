const input = document.querySelector('input');
input.onchange = (event) => {
  document.querySelector('p').innerHTML = `
.getAttribute('checked'): <b>${event.target.getAttribute('checked')}</b><br />
.checked: <b>${event.target.checked}</b><br />
.matches(':cheked'): <b>${event.target.matches(':checked')}</b>
`;
  document.querySelectorAll('p > b').forEach(element => element.style.color = 'blue');
}

input.dispatchEvent(new Event('change'));

document.querySelectorAll('div').forEach((element, index) => {
  element.setAttribute('id', `div-id${index}`)
  element.querySelector('span').innerHTML = `(id = <b>${element.getAttribute('id')}</b>)`;
});

document.querySelectorAll('span').forEach(element => element.style.color = 'blue');
