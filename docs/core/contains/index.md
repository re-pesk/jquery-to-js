# Method $.contains()

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 25%; }
tr td:nth-child(2) { width: 60%; }
tr td:nth-child(3) { width: 15%; }
td {
  vertical-align: top;
}
</style>

## Description

| jQuery | Description | API Reference |
|:--|:--|:--:|
| $.contains(container, contained) | **_Check_** to see **_if a DOM element is a descendant_** of another DOM element. |[API doc](https://api.jquery.com/jQuery.contains/) |

## Usage

| Usage | Description | JS |
|:--|:--|:--|
| $.contains(container: Element, contained: Element) | **_Check_** to see **_if a DOM element is a descendant_** of another DOM element. | container.contains(contained) |

## Common parts (shared)

[Common parts](/docs/mdview.html?example/index.md)

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
