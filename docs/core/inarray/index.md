# Method $.inArray()

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
| $.inArray(value, array, fromIndex?) | **_Search for a specified value_** within an array and return its index (or -1 if not found). | [API doc](https://api.jquery.com/jQuery.inArray/) |

## Usage

| jQuery | Description | JS |
|:--|:--|:--|
| $.inArray(value, array, fromIndex?) | **_Search for a specified value_** within an array and return its index (or -1 if not found). | array.indexOf(value, fromIndex?) |
| $.inArray(value, array, fromIndex?) > -1 | **_Search for a specified value_** within an array and return true if found. | array.includes(value, fromIndex?) |

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
