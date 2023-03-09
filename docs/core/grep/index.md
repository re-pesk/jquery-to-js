# Method $.grep()

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 25%; }
tr td:nth-child(2) { width: 55%; }
tr td:nth-child(3) { width: 20%; }
td {
  vertical-align: top;
}
</style>

## Description

| jQuery | Description | API Reference |
|:--|:--|:--:|
| $.grep(aray, (value, index?) => {...}, invert?) | **_Finds the elements of an array_** which satisfy a filter function. The original array is not affected. | [API doc](https://api.jquery.com/jQuery.grep/) |

## Usage

| jQuery | JS | Description |
|:--|:--|:--|
| $.grep(<br />&nbsp;&nbsp;&nbsp;&nbsp;array: Aray, <br />&nbsp;&nbsp;&nbsp;&nbsp;(element: Element, index: Integer) => Bool, <br />&nbsp;&nbsp;&nbsp;&nbsp;invert? : Bool<br />) | **_Finds the elements of an array_** which satisfy a filter function. The original array is not affected. | array.filter((element, index, array) => {...}) |

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

<iframe width="100%" height="80" src="example.html?jquery"></iframe>

### pure.js

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="80" src="example.html?pure"></iframe>
