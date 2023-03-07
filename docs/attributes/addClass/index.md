# Method .addClass()

<style>
th { text-align: left; }
tr td:nth-child(1) { width: 20rem; }
tr td:nth-child(2) { width: 50rem; }
tr td:nth-child(3) { width: 30rem; }
td {
  vertical-align: top;
}
</style>

## Description

Adds the specified class(es) to each element in the set of matched elements.

| jQuery | Descriptions | JS | API Reference |
|:--|:--|:--|:--:|
| $(...).addClass( className : String ) | One or more space-separated classes to be added to the class attribute of each matched element. | querySelector(...).classList.add( className ) | [API doc](https://api.jquery.com/addClass/) |
| $(...).addClass( classNames : Array ) | An array of classes to be added to the class attribute of each matched element. | querySelector(...).classList.add( ...classNames ) | ^|
| $(...).addClass( <br />&nbsp;&nbsp;&nbsp;&nbsp;Function(<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index : Integer,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentClassName : String<br />&nbsp;&nbsp;&nbsp;&nbsp;) : String \| Array<br />) | A function returning one or more space-separated class names or an array of class names to be added to the existing class name(s). Receives the index position of the element in the set and the existing class name(s) as arguments. Within the function, `this` refers to the current element in the set. |  | ^|

## Common parts (shared)

[Common parts](/docs/mdview.html?example/index.md)

## style.css

```css:src/style.css
```

## Scripts

### prepare.js

```js:src/prepare.js
```

### jquery.js

```js:src/jquery.js
```

[Example](example.html?jquery):

<iframe width="100%" height="200" src="example.html?jquery"></iframe>

### pure.js

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="200" src="example.html?pure"></iframe>
