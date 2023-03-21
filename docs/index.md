# jQuery to JS

Examples with jQuery code use <span style='color: red'>red</span> color,
examples with vanilla js use <span style='color: blue'>blue</span> one.

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 25rem; }
tr td:nth-child(2) { width: 60rem; }
td {
  vertical-align: top;
}
</style>

## [Attributes](?attributes.md)

|:--|:--|:--:|
| [.attr()](?pages/attr/) | Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element. | [API doc](https://api.jquery.com/attr/) |

## [Core](?core.md)

## [CSS](?css.md)

|:--|:--|:--:|
| [.addClass()](?pages/addClass/) | **_Adds_** the specified **_class(es) to each element_** in the set of matched elements. | [API doc](https://api.jquery.com/addClass/) |


## Deferred Object

|:--|:--|:--:|
| [$.Deferred()](?pages/deferred/) | A factory function that **_returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state_** of any synchronous or asynchronous function. | [API doc](https://api.jquery.com/jQuery.Deferred/) |
| [deferred.always()](?pages/deferred.always/) | A function, or array of functions, that is **_called when the Deferred is resolved or rejected_**. | [API doc](https://api.jquery.com/deferred.always/) |
| [deferred.done()](?pages/deferred.done/) | A function, or array of functions, that is **_called when the Deferred is resolved or rejected_**. | [API doc](https://api.jquery.com/deferred.done/) |


## [Manipulation](?manipulation.md)

### Class Attribute

|:--|:--|:--:|
| [.addClass(...)](?pages/addClass/) | **_Adds_** the specified **_class(es) to each element_** in the set of matched elements. | [API doc](https://api.jquery.com/addClass/) |

### Copying

|:--|:--|:--:|
| [.clone()](?pages/clone/) | Create a **_deep copy_** of the set of matched elements. | [API doc](https://api.jquery.com/clone/) |

### DOM Insertion, Around

|:--|:--|:--:|
| [.wrap()](?pages/wrap/) | Wrap an HTML structure **_around each element_** in the set of matched elements. | [API doc](https://api.jquery.com/wrap/) |
| [.wrapAll()](?pages/wrapall/) | Wrap an HTML structure **_around all elements_** in the set of matched elements. | [API doc](https://api.jquery.com/wrapAll/) |
| [.wrapInner()](?pages/wrapinner/) | Wrap an HTML structure **_around the content of each element_** in the set of matched elements. | [API doc](https://api.jquery.com/wrapInner/) |


### DOM Insertion, Inside

|:--|:--|:--:|
| [.prependTo()](?pages/prependTo/) | **_Insert_** every element in the set of matched elements **_to the beginning of the target_**. | [API doc](https://api.jquery.com/prependTo/) |
| [.text()](?pages/text/) | Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements. | [API doc](https://api.jquery.com/text/) |


### DOM Removal

|:--|:--|:--:|
| [.remove()](?pages/remove/) | **_Remove_** the set of matched elements from the DOM. | [API doc](https://api.jquery.com/remove/) |

## [Selectors](?selectors.md)

### Basic

|:--|:--|:--:|
| ['*'](?pages/all/) | Select **_all_** elements. | [API doc](https://api.jquery.com/all-selector/) |
| ['.class'](?pages/class/) | Select all elements with the given **_class_**. | [API doc](https://api.jquery.com/class-selector/) |
| ['tagName'](?pages/tagname/) | Select all elements with the given **_tag name_**. | [API doc](https://api.jquery.com/element-selector/) |
| ['#id'](?pages/id/) | Select a single element with the given **_id_** attribute. | [API doc](https://api.jquery.com/id-selector/) |
| ['selector1, selector2, ...'](?pages/multiple/) | Select the **_combined results_** of all the specified selectors. | [API doc](https://api.jquery.com/multiple-selector/) |


### Basic Filters

|:--|:--|:--:|
| [':animated'](?pages/animated/) | Select all elements that are **_in the progress of an animation_** at the time the selector is run. | [API doc](https://api.jquery.com/animated-selector/) |
| [':header'](?pages/header/) | Select all elements that are **_headers_**, like h1, h2, h3 and so on. | [API doc](https://api.jquery.com/header-selector/) |


### Content Filters

|:--|:--|:--:|
| [':contains(text)'](?pages/contains/) | Select all elements that **_contain_** the specified text. | [API doc](https://api.jquery.com/contains-selector/) |


### Hierarchy

|:--|:--|:--:|
| ['parent > child'](?pages/child/) | Select all direct child elements specified by "**_child_**" of elements specified by "parent". | [API doc](https://api.jquery.com/child-selector/) |
| ['ancestor descendant'](?pages/descendant/) | Select all elements that are **_descendants_** of a given ancestor. | [API doc](https://api.jquery.com/descendant-selector/) |
| ['prev + next'](?pages/next/) | Select all **_next_** elements matching "next" that are **_immediately preceded_** by a sibling "prev" | [API doc](https://api.jquery.com/next-adjacent-Selector/) |
| ['prev ~ siblings'](?pages/siblings/) | Select all **_sibling_** elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector. | [API doc](https://api.jquery.com/next-siblings-selector/) |


## [Traversing](?traversing.md)


### Filtering

|:--|:--|:--:|
| [.filter()](?pages/filter/) | **_Reduce the set of matched elements_** to those that match the selector or pass the function's test. | [API doc](https://api.jquery.com/filter/) |


### Miscellaneous Traversing

|:--|:--|:--:|
| [.contents()](?pages/contents/) | Get the **_children_** of each element in the set of matched elements, **_including text and comment nodes_**. | [API doc](https://api.jquery.com/contents/) |
| [.each()](?pages/each/) | **_Iterate_** over a jQuery object, **_executing a function_** for each matched element. | [API doc](https://api.jquery.com/each/) |
| [.end()](?pages/end/) | **_End_** the most recent **_filtering operation_** in the current chain and **_return_** the set of matched elements **_to its previous state_**. | [API doc](https://api.jquery.com/end/) |


### Tree Traversal

|:--|:--|:--:|
| [.children()](?pages/children/) | Get the **_children of each element_** in the set of matched elements, optionally filtered by a selector. | [API doc](https://api.jquery.com/children/) |
| [.find()](?pages/find/) | Get the **_descendants of each element_** in the current set of matched elements, filtered by a selector, jQuery object, or element. | [API doc](https://api.jquery.com/find/) |

## [Utilities](?utilities.md)

|:--|:--|:--:|
| [$.contains()](?pages/jquery.contains/) | **_Check_** to see **_if a DOM element is a descendant_** of another DOM element. | [API doc](https://api.jquery.com/jQuery.contains/) |
| [$.each()](?pages/jquery.each/) | A generic **_iterator function_**, which can be used to seamlessly iterate **_over both objects and arrays_**. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties. | [API doc](https://api.jquery.com/jQuery.each/) |
| [$.grep()](?pages/jquery.grep/) | **_Finds the elements of an array_** which satisfy a filter function. The original array is not affected. | [API doc](https://api.jquery.com/jQuery.grep/) |
| [$.inArray()](?pages/jquery.inarray/) | **_Search for a specified value_** within an array and return its index (or -1 if not found). | [API doc](https://api.jquery.com/jQuery.inArray/) |
| [$.merge()](?pages/jquery.merge/) | **_Merge_** the contents of **_two arrays_** together **_into the first array_**. | [API doc](https://api.jquery.com/jQuery.merge/) |
| [$.trim()](?pages/jquery.trim/) | **_Remove the whitespace_** from the beginning and end of a string. | [API doc](https://api.jquery.com/jQuery.trim/) |

----

## Misc

* [Common parts of examples](?example/)

* [jQuery API Reference](https://api.jquery.com)

* [Cheat sheet](https://oscarotero.com/jquery/) by Óscar Otero

## Test

[Test MD](?test/)
