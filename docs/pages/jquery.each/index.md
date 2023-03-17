# Method $.each()

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 20%; }
tr td:nth-child(2) { width: 55%; }
tr td:nth-child(3) { width: 25%; }
td {
  vertical-align: top;
}
</style>

## Description

| jQuery | Description | API Reference |
|:--|:--|:--:|
| $.each(aray \| object, (index \| name, value) => {...}) | A generic **_iterator function_**, which can be used to seamlessly iterate **_over both objects and arrays_**. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties. | [API doc](https://api.jquery.com/jQuery.each/) |

## Usage

| jQuery | Description | JS |
|:--|:--|:--|
| $.each(aray, (index, value) => {...}) | A generic **_iterator function_**, which can be used to seamlessly iterate **_over both objects and arrays_**. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties. | array.forEach((value, index) => {...}) |
| $.each(object, (name, value) => {...}) | ^| Object.entries(object).forEach(([name, value]) => {...}) |

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

<iframe width="100%" height="110" src="example.html?jquery"></iframe>

### pure.js

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="110" src="example.html?pure"></iframe>
