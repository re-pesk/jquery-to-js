# Manipulation

Equivalents of jQuery methods in Vanilla JavaScript

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 10rem; }
tr td:nth-child(2) { width: 20rem; }
tr td:nth-child(3) { width: 40rem; }
</style>

| Copying ||||
|:--|:--|:--|:--:|
| [.clone()](?clone/) | `$(selector).clone()` | Create a **_deep copy_** of the set of matched elements. | [API doc](https://api.jquery.com/clone/) |

| DOM Insertion, Inside ||||
|:--|:--|:--|:--:|
| [.prependTo()](?prependTo/) | `$(selector).prependTo(selector)` | **_Insert_** every element in the set of matched elements **_to the beginning of the target_**. | [API doc](https://api.jquery.com/prependTo/) |
| [.text()](?text/) | `$(selector).text()` | Get the combined text contents of each element in the set of matched elements, including their descendants. | [API doc](https://api.jquery.com/text/) |
| ^| `$(selector).text(text\|function)` | Set the content of each element in the set of matched elements to the specified text. | ^|

| DOM Removal ||||
|:--|:--|:--|:--:|
| [.remove()](?remove/) | `$(selector).remove(selector)` | **_Remove_** the set of matched elements from the DOM. | [API doc](https://api.jquery.com/remove/) |
