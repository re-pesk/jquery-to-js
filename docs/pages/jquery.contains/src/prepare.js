document.querySelector('head > title').innerHTML = 'jQuery.contains demo';

const body = document.querySelector('body');
body.innerHTML = `
<div id="one">
  One
  <div id="two">
    Two
    <div id="three">
      Three
    </div>
  </div>
</div>
`;
