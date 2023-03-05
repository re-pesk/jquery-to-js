# Method .wrapInner()

<style>
td {
  vertical-align: top;
}
</style>

| jQuery | JS | Description | API Reference |
|:--|:--|:--|:--:|
| $(...).wrapInner( | const wrapper = document.createElement(...); | Wrap an HTML structure **_around the content of each element_** in the set of matched elements. | [API doc](https://api.jquery.com/wrapInner/) |
| <br />&nbsp;&nbsp;&nbsp;&nbsp;Selector \| HTMLString \| DOMElement \| jQuery ^| <br />element.insertBefore(wrapper, child);^| ^| ^|
| <br />&nbsp;&nbsp;&nbsp;&nbsp;\| (Integer) => (String) ^| <br />wrapper.appendChild(child);^| ^| ^|
| <br />) ^| ^| ^| ^|

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

<iframe width="100%" height="130" src="example.html?jquery"></iframe>

### pure.js

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="130" src="example.html?pure"></iframe>
