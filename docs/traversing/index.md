# Traversing

Equivalents of jQuery methods in Vanilla JavaScript

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 20rem; }
tr td:nth-child(2) { width: 60rem; }
td {
  vertical-align: top;
}
</style>

| Filtering |||
|:--|:--|:--:|
| [$(...).filter()](?filter/) | **_Reduce the set of matched elements_** to those that match the selector or pass the function's test. | [API doc](https://api.jquery.com/filter/) |

| Miscellaneous Traversing |||
|:--|:--|:--:|
| [$(...).contents()](?contents/) | Get the **_children_** of each element in the set of matched elements, **_including text and comment nodes_**. | [API doc](https://api.jquery.com/contents/) |
| [$(...).each((index, element?) => {...})](?each/) | **_Iterate_** over a jQuery object, **_executing a function_** for each matched element. | [API doc](https://api.jquery.com/each/) |
| [$(...).end()](?end/) | **_End_** the most recent **_filtering operation_** in the current chain and **_return_** the set of matched elements **_to its previous state_**. | [API doc](https://api.jquery.com/end/) |

| Tree Traversal |||
|:--|:--|:--:|
| [$(...).children(selector?)](?children/) | Get the **_children of each element_** in the set of matched elements, optionally filtered by a selector. | [API doc](https://api.jquery.com/children/) |
| [$(...).find(selector?)](?find/) | Get the **_descendants of each element_** in the current set of matched elements, filtered by a selector, jQuery object, or element. | [API doc](https://api.jquery.com/find/) |
