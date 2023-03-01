# Method .end()

| jQuery | JS | Description | API Reference |
|:--|:--|:--|:--:|
| `$(selector).aaa().end().bbb()` | `querySelectorAll(selector).forEach(element => { element.aaa();` |  **_End_** the most recent **_filtering operation_**in the current chain<br />and **_return_** the set of matched elements **_to its previous state_**. | [api](https://api.jquery.com/end/) |
| ^| `element.bbb(); })` | ^| ^|

## Markup (shared)

```html:example.html
```

## Style (shared)

```css:src/style.css
```

## Scripts

### Helper (shared)

```js:src/main.js
```

### jQuery

```js:src/jquery.js
```

[Example](example.html?jquery):

<iframe width="100%" height="70" src="example.html?jquery"></iframe>

### Pure JS

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="70" src="example.html?pure"></iframe>
