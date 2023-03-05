# Method .children()

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 10rem; }
tr td:nth-child(2) { width: 30rem; }
tr td:nth-child(3) { width: 50rem; }
td {
  vertical-align: top;
}
</style>

| jQuery | JS | Description | API Reference |
|:--|:--|:--|:--:|
| $(...).find(selector) | element.querySelector(selector)<br />elementList.forEach(element => element.querySelector(selector)) | Get the **_descendants of each element_** in the current set of matched elements, filtered by a selector, jQuery object, or element. | [API doc](https://api.jquery.com/find/) |

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

<iframe width="100%" height="130" src="example.html?jquery"></iframe>

### pure.js

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="130" src="example.html?pure"></iframe>
