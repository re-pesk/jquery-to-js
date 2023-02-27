# Method .end()

| jQuery | JS | Description |
|:--:|:--|:--|
| `$(selector).aaa().end().bbb()` | `querySelectorAll(selector).forEach(element => {element.aaa(); element.bbb();})` | **_End_** the most recent **_filtering operation_** in the current chain and **_return_** the set of matched elements **_to its previous state_**. |

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
