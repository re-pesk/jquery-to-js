# Traversing

Equivalents of jQuery methods in Vanilla JavaScript

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 10rem; }
tr td:nth-child(2) { width: 15rem; }
tr td:nth-child(3) { width: 45rem; }
</style>

| Miscellaneous Traversing ||||
|:--|:--|:--|:--:|
| [.end()](?end/)  | `$(selector).end()` | **_End_** the most recent **_filtering operation_** in the current chain and **_return_** the set of matched elements **_to its previous state_**. | [api](https://api.jquery.com/end/) |

| Tree Traversal ||||
|:--|:--|:--|:--:|
| [.children()](?children/) | `$(selector).children(selector)` | Get the **_children_** of each element in the set of matched elements, optionally filtered by a selector. | [api](https://api.jquery.com/children/) |
