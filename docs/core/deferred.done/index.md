# Method deferred.done()

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
| deferred.done( doneCallbacks, doneCallbacks? ) | Add handlers to be called **_when the Deferred object is resolved_**. | [API doc](https://api.jquery.com/deferred.done/) |

## Usage

| jQuery | Description | JS |
|:--|:--|:--|
| deferred.done( doneCallback : Function ) | A function that is **_called when the Deferred is resolved_**. | promise.then( doneCallback ) |
| deferred.done( doneCallbacks : Function[] ) | Array of functions that is **_called when the Deferred is resolved_**. | promise.then(<br />&nbsp;&nbsp;&nbsp;&nbsp;() => [doneCallback: Function, doneCallBack: Function]<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.forEach( function => function() )<br />) |

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
