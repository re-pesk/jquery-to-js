const par = document.querySelector('p');

let newText = par.textContent.split(' ').join('</span> <span>');
newText = `<span>${newText}</span>`;
par.innerHTML = newText;

par.querySelectorAll('span')
  .forEach(
    (span) => {
      span.onpointerenter = (event) => event.target.classList.add('hilite');
      span.onpointerleave = (event) => event.target.classList.remove('hilite');
      if (span.innerText.includes('t')) {
        span.style.fontStyle = 'italic';
        span.style.fontWeight = 'bolder';
      }
    }
  );
