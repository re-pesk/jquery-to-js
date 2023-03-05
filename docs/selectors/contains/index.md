# :contains() Selector (':contains(text)')

<style>
td {
  vertical-align: top;
}
</style>

| jQuery | JS | Description | API Reference |
|:--:|:--:|:--:|:--:|
| $(':contains(text)') | querySelectorAll('*').filter(element => element.textContent.includes(text)) | Select all elements that **_contain_** the specified text. | [API doc](https://api.jquery.com/contains-selector/) |

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

<iframe width="100%" height="100" src="example.html?jquery"></iframe>

### pure.js

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="100" src="example.html?pure"></iframe>
