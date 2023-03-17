<!-- markdownlint-disable MD012 -->
# Manipulation

Equivalents of jQuery methods in Vanilla JavaScript

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 20rem; }
tr td:nth-child(2) { width: 60rem; }
td {
  vertical-align: top;
}
</style>

| Copying |||
|:--|:--|:--:|
| [$(...).clone()](?pages/clone/) | Create a **_deep copy_** of the set of matched elements. | [API doc](https://api.jquery.com/clone/) |


| DOM Insertion, Around |||
|:--|:--|:--:|
| [$(...).wrap(wrappingElement \| function)](?pages/wrap/) | Wrap an HTML structure **_around each element_** in the set of matched elements. | [API doc](https://api.jquery.com/wrap/) |
| [$(...).wrapAll(wrappingElement \| function)](?pages/wrapall/) | Wrap an HTML structure **_around all elements_** in the set of matched elements. | [API doc](https://api.jquery.com/wrapAll/) |
| [$(...).wrapInner(wrappingElement \| function)](?pages/wrapinner/) | Wrap an HTML structure **_around the content of each element_** in the set of matched elements. | [API doc](https://api.jquery.com/wrapInner/) |


| DOM Insertion, Inside |||
|:--|:--|:--:|
| [$(...).prependTo(selector \| object)](?pages/prependto/) | **_Insert_** every element in the set of matched elements **_to the beginning of the target_**. | [API doc](https://api.jquery.com/prependTo/) |
| [$(...).text()](?pages/text/) | Get the combined text contents of each element in the set of matched elements, including their descendants. | [API doc](https://api.jquery.com/text/) |
| [$(...).text(text \| function)](?pages/text/) | Set the content of each element in the set of matched elements to the specified text. | ^|


| DOM Removal |||
|:--|:--|:--:|
| [$(...).remove(selector)](?pages/remove/) | **_Remove_** the set of matched elements from the DOM. | [API doc](https://api.jquery.com/remove/) |
