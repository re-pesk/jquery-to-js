# Method .attr()

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
|:--|:--|:--|
| $(...).attr(...) | Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element. | [API doc](https://api.jquery.com/attr/) |

## Usage

| jQuery | Description | JS |
|:--|:--|:--|
| $(...).attr(name) | **_Get the value of an attribute for the first element_** in the set of matched elements. | querySelector(...).getAttribute(name) |
| $(...).attr(name, value)<br />$(...).attr({name: value, ...}) | **_Set one or more attributes for the set_** of matched elements. | querySelector(...).setAttribute(name, value) |

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
