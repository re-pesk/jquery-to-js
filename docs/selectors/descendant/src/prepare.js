document.querySelector('head > title').innerHTML = 'descendant demo';
document.querySelector('head > style').innerHTML = '@import "./src/style.css";';

const body = document.querySelector('body');
body.innerHTML = `<form>
<div>Form is surrounded by the green border.</div>

<label for="name">Child of form:</label>
<input name="name" id="name">

<fieldset>
  <label for="newsletter">Grandchild of form, child of fieldset:</label>
  <input name="newsletter" id="newsletter">
</fieldset>
</form>
Sibling to form: <input name="none">`;
