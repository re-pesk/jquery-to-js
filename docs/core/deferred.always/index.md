# Method deferred.always()

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 25%; }
tr td:nth-child(2) { width: 45%; }
tr td:nth-child(3) { width: 30%; }
td {
  vertical-align: top;
}
</style>

## Description

| jQuery | Descriptions | API Reference |
|:--|:--|:--:|
| deferred.always( alwaysCallbacks, alwaysCallbacks? ) | A function, or array of functions, that is **_called when the Deferred is resolved or rejected_**. | [API doc](https://api.jquery.com/deferred.always/) |

## Usage

| jQuery | Description | JS |
|:--|:--|:--|
| deferred.always( alwaysCallback : Function ) | A function, that is **_called when the Deferred is resolved or rejected_**. | promise.finally( alwaysCallback ) |
| deferred.always( alwaysCallbacks : Function[] ) | Array of functions, that is **_called when the Deferred is resolved or rejected_**. | promise.finally(<br />&nbsp;&nbsp;&nbsp;&nbsp;() => [alwaysCallback: Function, alwaysCallBack: Function]<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.forEach( function => function() )<br />) |

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

<iframe width="100%" height="110" src="example.html?jquery"></iframe>

### pure.js

```js:src/pure.js
```

[Example](example.html?pure):

<iframe width="100%" height="110" src="example.html?pure"></iframe>

[Test 1](test-1.html)

[Test 2](test-2.html)
