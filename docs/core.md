<!-- markdownlint-disable MD012 -->
# Core

Equivalents of jQuery methods in Vanilla JavaScript

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 25rem; }
tr td:nth-child(2) { width: 60rem; }
td {
  vertical-align: top;
}
</style>

| Deferred Object |||
|:--|:--|:--:|
| [$.Deferred(beforeStart?)](??pages/deferred/) | A factory function that **_returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state_** of any synchronous or asynchronous function. | [API doc](https://api.jquery.com/jQuery.Deferred/) |
| [deferred.always( alwaysCallbacks, alwaysCallbacks? )](??pages/deferred.always/) | A function, or array of functions, that is **_called when the Deferred is resolved or rejected_**. | [API doc](https://api.jquery.com/deferred.always/) |
| [deferred.done( doneCallbacks, doneCallbacks? )](??pages/deferred.done/) | A function, or array of functions, that is **_called when the Deferred is resolved or rejected_**. | [API doc](https://api.jquery.com/deferred.done/) |


| Utilities |||
|:--|:--|:--:|
| [$.contains(container, contained)](??pages/jquery.contains/) | **_Check_** to see **_if a DOM element is a descendant_** of another DOM element. | [API doc](https://api.jquery.com/jQuery.contains/) |
| [$.each(aray \| object, (index \| name, value) => {...})](??pages/jquery.each/) | A generic **_iterator function_**, which can be used to seamlessly iterate **_over both objects and arrays_**. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties. | [API doc](https://api.jquery.com/jQuery.each/) |
| [$.grep(aray, (value, index?) => {...}, invert?)](??pages/jquery.grep/) | **_Finds the elements of an array_** which satisfy a filter function. The original array is not affected. | [API doc](https://api.jquery.com/jQuery.grep/) |
| [$.inArray(value, array, fromIndex?)](??pages/jquery.inarray/) | **_Search for a specified value_** within an array and return its index (or -1 if not found). | [API doc](https://api.jquery.com/jQuery.inArray/) |
| [$.merge(array1, array2)](??pages/jquery.merge/) | **_Merge_** the contents of **_two arrays_** together **_into the first array_**. | [API doc](https://api.jquery.com/jQuery.merge/) |
| [$.trim(text)](??pages/jquery.trim/) | **_Remove the whitespace_** from the beginning and end of a string. | [API doc](https://api.jquery.com/jQuery.trim/) |
