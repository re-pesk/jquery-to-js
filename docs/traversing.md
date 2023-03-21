<!-- markdownlint-disable MD012 -->
# Traversing

Equivalents of jQuery methods in Vanilla JavaScript

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 15%; font-weight: bold; }
tr td:nth-child(2) { width: 75%; }
td {
  vertical-align: top;
}
</style>

{.category-list}

* [Traversing](?traversing.md) [~doc~](https://api.jquery.com/category/traversing/)
  * [Filtering](?filtering.md) [~doc~](//api.jquery.com/category/traversing/filtering/)
  * [Miscellaneous Traversing](?miscellaneous-traversing.md) [~doc~](//api.jquery.com/category/traversing/miscellaneous-traversal/)
  * [Tree Traversal](?tree-traversal.md) [~doc~](//api.jquery.com/category/traversing/tree-traversal/)

| Filtering |||
|:--|:--|:--:|
| [$(...).filter()](?pages/filter/) | **_Reduce the set of matched elements_** to those that match the selector or pass the function's test. | [API doc](https://api.jquery.com/filter/) |


| Miscellaneous Traversing |||
|:--|:--|:--:|
| [$(...).contents()](?pages/contents/) | Get the **_children_** of each element in the set of matched elements, **_including text and comment nodes_**. | [API doc](https://api.jquery.com/contents/) |
| [$(...).each((index, element?) => {...})](?pages/each/) | **_Iterate_** over a jQuery object, **_executing a function_** for each matched element. | [API doc](https://api.jquery.com/each/) |
| [$(...).end()](?pages/end/) | **_End_** the most recent **_filtering operation_** in the current chain and **_return_** the set of matched elements **_to its previous state_**. | [API doc](https://api.jquery.com/end/) |


| Tree Traversal |||
|:--|:--|:--:|
| [$(...).children(selector?)](?pages/children/) | Get the **_children of each element_** in the set of matched elements, optionally filtered by a selector. | [API doc](https://api.jquery.com/children/) |
| [$(...).find(selector?)](?pages/find/) | Get the **_descendants of each element_** in the current set of matched elements, filtered by a selector, jQuery object, or element. | [API doc](https://api.jquery.com/find/) |
