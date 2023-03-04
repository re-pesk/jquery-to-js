# Method $.merge()

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 30rem; }
tr td:nth-child(2) { width: 30rem; }
tr td:nth-child(3) { width: 60rem; }
</style>

| jQuery | JS | Description | API Reference |
|:--|:--|:--|:--:|
| `$.merge(array1, array2)` | `array1.push(...array2)` or | **_Merge_** the contents of **_two arrays_** together **_into the first array_**. | [API doc](https://api.jquery.com/jQuery.merge/) |
| `... = $.merge([], array1)` | `... = [...array1]` | ^| ^|

## Common parts (shared)

[Common parts](/docs/mdview.html?example/index.md)

## Style

```css:src/style.css
```

## Scripts

### Prepare

```js:src/prepare.js
```

### jQuery

```js:src/jquery.js
```

[Example](example.html?jquery):

<iframe width="100%" height="40" src="example.html?jquery"></iframe>

### Pure JS

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="40" src="example.html?pure"></iframe>
