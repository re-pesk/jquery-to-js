# Method .addClass()

<style>
  th { text-align: left; }
  tr td:nth-child(1) { width: 20%; }
  tr td:nth-child(2) { width: 60%; }
  tr td:nth-child(3) { width: 20%; }
  td {
    vertical-align: top;
  }
</style>

## Description

| jQuery | Description | API Reference |
|:--|:--|:--:|
| $(...).addClass(...) | **_Adds_** the specified **_class(es) to each element_** in the set of matched elements. | [API doc](https://api.jquery.com/addClass/) |

## Usage

| Usage | Description | JS |
|:--|:--|:--|
| $(...).addClass( className : String ) | One or more space-separated classes to be added to the class attribute of each matched element. | querySelector(...).classList<br />&nbsp;&nbsp;&nbsp;&nbsp;.add( className ) |
| $(...).addClass( classNames : Array ) | An array of classes to be added to the class attribute of each matched element. |querySelector(...).classList<br />&nbsp;&nbsp;&nbsp;&nbsp;.add( ...classNames ) |
| $(...).addClass( Function(<br />&nbsp;&nbsp;&nbsp;&nbsp;index : Integer,<br />&nbsp;&nbsp;&nbsp;&nbsp;currentClassName : String<br />) : String \| Array ) | A function returning one or more space-separated class names or an array of class names to be added to the existing class name(s). Receives the index position of the element in the set and the existing class name(s) as arguments. Within the function, `this` refers to the current element in the set. | querySelectorAll.forEach(<br />&nbsp;&nbsp;&nbsp;&nbsp;(element) => element<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.classList.add( className )<br />) |

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
