# Manipulation

Equivalents of jQuery methods in Vanilla JavaScript

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 20rem; }
tr td:nth-child(2) { width: 60rem; }
</style>

| Copying |||
|:--|:--|:--:|
| [$(...).clone()](?clone/) | Create a **_deep copy_** of the set of matched elements. | [API doc](https://api.jquery.com/clone/) |

| DOM Insertion, Inside |||
|:--|:--|:--:|
| [$(...).prependTo(selector \| object)](?prependTo/) | **_Insert_** every element in the set of matched elements **_to the beginning of the target_**. | [API doc](https://api.jquery.com/prependTo/) |
| [$(...).text()](?text/) | Get the combined text contents of each element in the set of matched elements, including their descendants. | [API doc](https://api.jquery.com/text/) |
| [$(...).text(text \| function)](?text/) | Set the content of each element in the set of matched elements to the specified text. | ^|

| DOM Removal |||
|:--|:--|:--:|
| [$(...).remove(selector)](?remove/) | **_Remove_** the set of matched elements from the DOM. | [API doc](https://api.jquery.com/remove/) |
