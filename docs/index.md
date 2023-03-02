# jQuery to JS

Examples with jQuery code use <span style='color: red'>red</span> color, examples with vanilla js use <span style='color: blue'>blue</span> one.

## [Selectors](?selectors/)

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 12rem; }
tr td:nth-child(2) { width: 60rem; }
</style>

| Basics |||
|--|--|--|
| [* (All)](?selectors/all/) | Select **_all_** elements. | [API doc](https://api.jquery.com/all-selector/) |
| [.class](?selectors/class/) | Select all elements with the given **_class_**. | [API doc](https://api.jquery.com/class-selector/) |
| [tagName](?selectors/tagname/) | Select all elements with the given **_tag name_**. | [API doc](https://api.jquery.com/element-selector/) |
| [#id](?selectors/id/) | Select a single element with the given **_id_** attribute. | [API doc](https://api.jquery.com/id-selector/) |
| [selector1, selector2, ...](?selectors/multiple/) | Select the **_combined results_** of all the specified selectors. | [API doc](https://api.jquery.com/multiple-selector/) |

| Hierarchy |||
|--|--|--|
| [parent > child](?selectors/child/) | Select all direct child elements specified by "**_child_**" of elements specified by "parent". | [API doc](https://api.jquery.com/child-selector/) |
| [ancestor descendant](?selectors/descendant/) | Select all elements that are **_descendants_** of a given ancestor. | [API doc](https://api.jquery.com/descendant-selector/) |
| [prev + next](?selectors/next/) | Select all **_next_** elements matching "next" that are **_immediately preceded_** by a sibling "prev" | [API doc](https://api.jquery.com/next-adjacent-Selector/) |
| [prev ~ siblings](?selectors/siblings/) | Select all **_sibling_** elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector. | [API doc](https://api.jquery.com/next-siblings-selector/) |

| Basic Filters |||
|--|--|--|
| [:animated](?selectors/animated/) | Select all elements that are **_in the progress of an animation_** at the time the selector is run. | [API doc](https://api.jquery.com/animated-selector/) |
| [:header](?selectors/header/) | Select all elements that are **_headers_**, like h1, h2, h3 and so on. | [API doc](https://api.jquery.com/header-selector/) |

| Content Filters |||
|--|--|--|
| [:contains()](?selectors/contains/) | Select all elements that **_contain_** the specified text. | [API doc](https://api.jquery.com/contains-selector/) |

## Methods

### [Manipulation](?manipulation/)

| Copying |||
|--|--|--|
| [.clone()](?manipulation/clone/) | Create a **_deep copy_** of the set of matched elements. | [API doc](https://api.jquery.com/clone/) |

| DOM Insertion, Inside |||
|--|--|--|
| [.prependTo()](?manipulation/prependTo/) | **_Insert_** every element in the set of matched elements **_to the beginning of the target_**. | [API doc](https://api.jquery.com/prependTo/) |
| [.text()](?manipulation/text/) | **_Get_** the combined **_text contents_** of each element in the set of matched elements, including their descendants. | [API doc](https://api.jquery.com/text/) |
| ^| **_Set_** the content of each element in the set of matched elements to the specified **_text_**. | ^|

| DOM Removal |||
|--|--|--|
| [.remove()](?manipulation/remove/) | **_Remove_** the set of matched elements from the DOM. | [API doc](https://api.jquery.com/remove/) |

### [Traversing](?traversing/)

| Miscellaneous Traversing |||
|--|--|--|
| [.end()](?traversing/end/) | **_End_** the most recent **_filtering operation_** in the current chain and **_return_** the set of matched elements **_to its previous state_**. | [API doc](https://api.jquery.com/end/) |

| Tree Traversal |||
|--|--|--|
| [.children()](?traversing/children/) | Get the **_children_** of each element in the set of matched elements, optionally filtered by a selector. | [API doc](https://api.jquery.com/children/) |

### [Core](?core/)

| Utilities |||
|--|--|--|
| [.trim()](?core/trim/) | **_Remove the whitespace_** from the beginning and end of a string. | [API doc](https://api.jquery.com/jQuery.trim/) |

----

## Misc

* [Common parts of examples](?example/)

* [jQuery API Reference](https://api.jquery.com)

* [Cheat sheet](https://oscarotero.com/jquery/) by Óscar Otero

## Test

[Test MD](?test/)
