<!-- markdownlint-disable MD041-->
<!-- <link href="http://thomasf.github.io/solarized-css/solarized-dark.min.css" rel="stylesheet" /> -->
<!-- <link rel="stylesheet" href="src/styles/style.css" /> -->

[Return](../)

# This is a really big, large title

Here are some of the problems with default Markdown syntax:

* It uses your browser's default font, size, and line-height (Times).
* It uses your browser's default width (all the way across the page). This makes it really hard to read.

## Large Note

This CSS file borrows extensively from the [Space](../%22http:/getspace.org%22)
WordPress theme, which will give you a lot more tools to make your
blog search engine friendly than just 70 lines of CSS. It's also
guaranteed to be compatible in more browsers than this stylesheet.
You should check out their post on [how to make text actually look
interesting](http://getspace.org/typographic-contras-minimalist-web-design/),
and then [buy their WordPress
theme](https://www.e-junkie.com/ecom/gb.php?i=956848&c=gc&cl=107401&ejc=4).

-------

### Blockquotes

This is what a sample blockquote looks like:

> "Then listen to me." Franz then related to his friend the history of his
> excursion to the Island of Monte Cristo and of his finding a party of
> smugglers there, and the two Corsican bandits with them. He dwelt with
> considerable force and energy on the almost magical hospitality he had
> received from the count, and the magnificence of his entertainment in the
> grotto of the "Thousand and One Nights." He recounted, with circumstantial
> exactitude, all the particulars of the supper, the hashish, the statues, the
> dream, and how, at his awakening, there remained no proof or trace of all
> these events, save the small yacht, seen in the distant horizon driving under
> full sail toward Porto-Vecchio.
>
> Then he detailed the conversation overheard by him at the Colosseum,
> between the count and Vampa, in which the count had promised to obtain the
> release of the bandit Peppino, - an engagement which, as our readers are
> aware, he most faithfully fulfilled. At last he arrived at the adventure of
> the preceding night, and the embarrassment in which he found himself placed
> by not having sufficient cash by six or seven hundred piastres to make up the
> sum required, and finally of his application to the count and the picturesque
> and satisfactory result that followed.

### Ordered Lists

Here's an example of an ordered list. I'm making this sentence really long to
test the line wrapping.

1. This list element is the first list element of many which will surely come.
2. This list element is the **second** list element, and probably my favorite out
   of all of them.
3. This list element is the *third* list element, which means it probably is
   anxious and has to fill niches not filled by the other two.
4. The fourth list element is lazy.

### Forms and Buttons

Here's a sample form:

<form>
  <input type="text" size="30" />
  <br>
  <label>
      <input type="checkbox" />
      <span>This is text accompanying the checkbox</span>
  </label><br>
  <label>
      <input type="checkbox" />
      <span>More text with a different checkbox</span>
  </label>
  <br><br>
  <select>
    <option>Select an option</option>
    <option>One</option>
    <option>Two</option>
  </select>
  <br>

  <button type="submit">Sample Button</button>
</form>

### Code Blocks

Code can either be `inline`, like `this`, or it can be on its own line. Here's
the CSS I'm using to style this document:

    /* This is a really long comment at the start of the file to test line
     * wrapping. */

    body{
        margin: 0 auto;
        font-family: Georgia, Palatino, serif;
        color: #444444;
        line-height: 1;
        max-width: 960px;
        padding: 30px;
    }
    h1, h2, h3, h4 {
        color: #111111;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, p {
        margin-bottom: 24px;
        padding: 0;
    }
    h1 {
        font-size: 48px;
    }
    h2 {
        font-size: 36px;
        margin: 24px 0 6px;
    }
    h3 {
        font-size: 24px;
    }
    h4 {
        font-size: 21px;
    }
    h5 {
        font-size: 18px;
    }
    a {
        color: #0099ff;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    }
    ul, ol {
        padding: 0;
        margin: 0;
    }
    li {
        line-height: 24px;
    }
    p, ul, ol {
        font-size: 16px;
        line-height: 24px;
        max-width: 540px;
    }
    pre {
        padding: 0px 24px;
        max-width: 800px;
        white-space: pre-wrap;
    }
    code {
        font-family: Consolas, Monaco, Andale Mono, monospace;
        line-height: 1.5;
        font-size: 13px;
    }
    aside {
        display: block;
        float: right;
        width: 390px;
    }
    blockquote {
        margin: 1em 2em;
        max-width: 476px;
    }
    blockquote p {
        color: #666;
        max-width: 460px;
    }
    hr {
        width: 540px;
        text-align: left;
        margin: 0 auto 0 0;
        color: #999;
    }

    /* Code below this line is copyright Twitter Inc. */

    button,
    input,
    select,
    textarea {
      font-size: 100%;
      margin: 0;
      vertical-align: baseline;
      *vertical-align: middle;
    }
    button, input {
      line-height: normal;
      *overflow: visible;
    }
    button::-moz-focus-inner, input::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    button,
    input[type="button"],
    input[type="reset"],
    input[type="submit"] {
      cursor: pointer;
      -webkit-appearance: button;
    }
    input[type=checkbox], input[type=radio] {
      cursor: pointer;
    }
    /* override default chrome & firefox settings */
    input:not([type="image"]), textarea {
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
    }

    input[type="search"] {
      -webkit-appearance: textfield;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
    }
    input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    label,
    input,
    select,
    textarea {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 13px;
      font-weight: normal;
      line-height: normal;
      margin-bottom: 18px;
    }
    input[type=checkbox], input[type=radio] {
      cursor: pointer;
      margin-bottom: 0;
    }
    input[type=text],
    input[type=password],
    textarea,
    select,
    .uneditable-input {
      display: inline-block;
      width: 210px;
      padding: 4px;
      font-size: 13px;
      font-weight: normal;
      line-height: 18px;
      height: 18px;
      color: #808080;
      border: 1px solid #ccc;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
    }
    select, input[type=file] {
      height: 27px;
      line-height: 27px;
    }
    textarea {
      height: auto;
    }

    /* grey out placeholders */
    :-moz-placeholder {
      color: #bfbfbf;
    }
    ::-webkit-input-placeholder {
      color: #bfbfbf;
    }

    input[type=text],
    input[type=password],
    select,
    textarea {
      -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
      -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
      transition: border linear 0.2s, box-shadow linear 0.2s;
      -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    input[type=text]:focus, input[type=password]:focus, textarea:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
      -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
    }

    /* buttons */
    button {
      display: inline-block;
      padding: 4px 14px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 13px;
      line-height: 18px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      background-color: #0064cd;
      background-repeat: repeat-x;
      background-image: -khtml-gradient(linear, left top, left bottom, from(#049cdb), to(#0064cd));
      background-image: -moz-linear-gradient(top, #049cdb, #0064cd);
      background-image: -ms-linear-gradient(top, #049cdb, #0064cd);
      background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #049cdb), color-stop(100%, #0064cd));
      background-image: -webkit-linear-gradient(top, #049cdb, #0064cd);
      background-image: -o-linear-gradient(top, #049cdb, #0064cd);
      background-image: linear-gradient(top, #049cdb, #0064cd);
      color: #fff;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
      border: 1px solid #004b9a;
      border-bottom-color: #003f81;
      -webkit-transition: 0.1s linear all;
      -moz-transition: 0.1s linear all;
      transition: 0.1s linear all;
      border-color: #0064cd #0064cd #003f81;
      border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    }
    button:hover {
      color: #fff;
      background-position: 0 -15px;
      text-decoration: none;
    }
    button:active {
      -webkit-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
      box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    button::-moz-focus-inner {
      padding: 0;
      border: 0;
    }

## Table

| A | B | C |
|:--|:--:|--:|
| Labas | rytas | vakare |
