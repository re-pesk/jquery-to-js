# :contains() Selector (':contains(text)')

| jQuery | JS | Description | API Reference |
|:--:|:--:|:--:|:--:|
| `$(':contains(text)')` | `querySelectorAll('*').filter(element => element.textContent.includes(text))` | Select all elements that **_contain_** the specified text. | [API doc](https://api.jquery.com/contains-selector/) |

## Markup (shared)

```html:example.html
```

## Scripts

### Helper (shared)

```js:src/main.js
```

### jQuery

```js:src/jquery.js
```

[Example](example.html?jquery):

<iframe width="100%" height="100" src="example.html?jquery"></iframe>

### Pure JS

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="100" src="example.html?pure"></iframe>
