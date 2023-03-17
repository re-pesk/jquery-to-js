document.querySelector('head > title').innerHTML = 'next demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<form>
<label for="name">Name:</label>
<input name="name" id="name">
<fieldset>
  <label for="newsletter">Newsletter:</label>
  <input name="newsletter" id="newsletter">
</fieldset>
</form>
<input name="none">`;
