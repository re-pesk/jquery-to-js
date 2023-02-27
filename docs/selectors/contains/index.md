# :contains() Selector (':contains(text)')

| jQuery | JS | Description |
|:--:|:--:|:--:|
| `$(':contains(text)')` | `querySelectorAll('*').filter(element => element.textContent.includes(text))` | Select all elements that contain the specified text. |

## jQuery

[Example](jquery.html):

```js:src/jquery.js
```

<iframe width="100%" height="150" src="jquery.html"></iframe>

## Vanilla JS

[Example](vanilla.html):

```js:src/vanilla.js
```

<iframe width="100%" height="150" src="vanilla.html"></iframe>
