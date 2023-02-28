# Equivalents of jQuery methods in Vanilla JavaScript

| **Methods** ||||
|:--|:--|:--|:--:|
| Name in<br>API Reference | jQuery | Description | Examples |
| [.clone()](https://api.jquery.com/clone/) | `$(selector).clone()` | Create a **_deep copy_** of the set of matched elements. | [Go](?clone/) |
| [.prependTo()](https://api.jquery.com/prependTo/) | `$(selector).prependTo(selector)` | **_Insert_** every element in the set of matched elements **_to the beginning of the target_**. | [Go](?prependTo/) |
| [.children()](https://api.jquery.com/children/) | `$(selector).children(selector)` | Get the **_children_** of each element in the set of matched elements, optionally filtered by a selector. | [Go](?children/) |
| [.remove()](https://api.jquery.com/remove/) | `$(selector).remove(selector)` | **_Remove_** the set of matched elements from the DOM. | [Go](?remove/) |
| [.end()](https://api.jquery.com/end/)  | `$(selector).end()` | **_End_** the most recent **_filtering operation_** in the current chain and **_return_** the set of matched elements **_to its previous state_**. | [Go](?end/) |
