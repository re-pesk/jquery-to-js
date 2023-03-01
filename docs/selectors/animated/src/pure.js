document.querySelector("#run").onclick = () => {
  document.querySelectorAll("div.animated").forEach((element) => element.classList.toggle("colored"));
};

function animateIt(element) {
  element.ontransitionstart = (event) => {
    event.target.classList.add('animated');
  };

  element.ontransitionend = (event) => {
    event.target.classList.remove('animated');
  };

  let slideOpen = true;
  let heightChecked = false;
  let initHeight = 0;

  function slideToggle() {

    if (!heightChecked) {
      initHeight = element.offsetHeight;
      heightChecked = true;
    }
    if (slideOpen) {
      slideOpen = false;
      element.style.height = '0px';
    } else {
      slideOpen = true;
      element.style.height = initHeight + 'px';
    }
  }

  setInterval(slideToggle, 1000);
}

animateIt(document.querySelector('#vamover'));
