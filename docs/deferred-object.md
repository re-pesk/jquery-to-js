# Category: Deferred Object ([API doc](https://api.jquery.com/category/deferred-object/))

The Deferred object, introduced in jQuery 1.5, is a chainable utility object created by calling the jQuery.Deferred() method. It can register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.

The Deferred object is chainable, similar to the way a jQuery object is chainable, but it has its own methods. After creating a Deferred object, you can use any of the methods below by either chaining directly from the object creation or saving the object in a variable and invoking one or more methods on that variable.

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 15%; font-weight: bold; }
tr td:nth-child(2) { width: 75%; }
td {
  vertical-align: top;
}
</style>

|:--|:--|:--:|
| [$.Deferred()](?pages/deferred/) | A factory function that **_returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state_** of any synchronous or asynchronous function. | [API doc](https://api.jquery.com/jQuery.Deferred/) |
| [deferred.always()](?pages/deferred.always/) | A function, or array of functions, that is **_called when the Deferred is resolved or rejected_**. | [API doc](https://api.jquery.com/deferred.always/) |
| [deferred.done()](?pages/deferred.done/) | Add handlers to be **_called when the Deferred object is resolved_**. | [API doc](https://api.jquery.com/deferred.done/) |
