# Method $.merge()

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
| $.merge(array1, array2) | **_Merge_** the contents of **_two arrays_** together **_into the first array_**. | [API doc](https://api.jquery.com/jQuery.merge/) |

## Usage

| jQuery | Description | JS |
|:--|:--|:--|
| $.merge(array1, array2) | **_Merge_** the contents of **_two arrays_** together **_into the first array_**. | array1.push(...array2) |
| ... = $.merge([], array1) | **_Copy_** the contents of **_array into the other array_**. | ... = [...array1] |
| ... = $.merge($.merge([], array1), array2) |  **_Merge_** the contents of **_two arrays_** together **_into the third array_**. | ... = [...array1, ...array2] |

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

<iframe width="100%" height="40" src="example.html?jquery"></iframe>

### pure.js

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="40" src="example.html?pure"></iframe>
