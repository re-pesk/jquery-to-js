# Method $.Deferred()

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 20%; }
tr td:nth-child(2) { width: 40%; }
tr td:nth-child(3) { width: 40%; }
td {
  vertical-align: top;
}
</style>

## Description

| jQuery | Description | API Reference |
|:--|:--|:--:|
| $.Deferred(beforeStart?) | A factory function that **_returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state_** of any synchronous or asynchronous function. | [API doc](https://api.jquery.com/jQuery.Deferred/) |

## Usage

| jQuery | Description | JS |
|:--|:--|:--|
| $.Deferred() | A factory function that **_returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state_** of any synchronous or asynchronous function. | const Deferred = () => {<br />&nbsp;&nbsp;&nbsp;&nbsp;let methods = {};<br />&nbsp;&nbsp;&nbsp;&nbsp;const promise = new Promise((resolve, reject) => (methods = {resolve, reject}));<br />&nbsp;&nbsp;&nbsp;&nbsp;return Object.assign(promise, methods);<br />} |
