# Core

Equivalents of jQuery methods in Vanilla JavaScript

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 30rem; }
tr td:nth-child(2) { width: 60rem; }
</style>

| Utilities |||
|:--|:--|:--:|
| [$.each(aray \| object, (index \| name, value) => {...})](?each/) | A generic **_iterator function_**, which can be used to seamlessly iterate **_over both objects and arrays_**. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties. | [API doc](https://api.jquery.com/jQuery.each/) |
| [$.grep(aray, (value, index?) => {...}, invert?)](?grep/) | **_Finds the elements of an array_** which satisfy a filter function. The original array is not affected. | [API doc](https://api.jquery.com/jQuery.grep/) |
| [$.inArray(value, array, fromIndex?)](?inarray/) | **_Search for a specified value_** within an array and return its index (or -1 if not found). | [API doc](https://api.jquery.com/jQuery.inArray/) |
| [$.trim(text)](?trim/) | **_Remove the whitespace_** from the beginning and end of a string. | [API doc](https://api.jquery.com/jQuery.trim/) |
