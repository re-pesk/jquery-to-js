# jQuery to JS

Examples with jQuery code use <span style='color: red'>red</span> color, examples with vanilla js use <span style='color: blue'>blue</span> one.

## [Selectors](?selectors/)

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 25rem; }
tr td:nth-child(2) { width: 60rem; }
td {
  vertical-align: top;
}
</style>

| Basics |||
|:--|:--|:--:|
| [$('*')](?selectors/all/) | Select **_all_** elements. | [API doc](https://api.jquery.com/all-selector/) |
| [$('.class')](?selectors/class/) | Select all elements with the given **_class_**. | [API doc](https://api.jquery.com/class-selector/) |
| [$('tagName')](?selectors/tagname/) | Select all elements with the given **_tag name_**. | [API doc](https://api.jquery.com/element-selector/) |
| [$('#id')](?selectors/id/) | Select a single element with the given **_id_** attribute. | [API doc](https://api.jquery.com/id-selector/) |
| [$('selector1, selector2, ...')](?selectors/multiple/) | Select the **_combined results_** of all the specified selectors. | [API doc](https://api.jquery.com/multiple-selector/) |

| Hierarchy |||
|:--|:--|:--:|
| [$('parent > child')](?selectors/child/) | Select all direct child elements specified by "**_child_**" of elements specified by "parent". | [API doc](https://api.jquery.com/child-selector/) |
| [$('ancestor descendant')](?selectors/descendant/) | Select all elements that are **_descendants_** of a given ancestor. | [API doc](https://api.jquery.com/descendant-selector/) |
| [$('prev + next')](?selectors/next/) | Select all **_next_** elements matching "next" that are **_immediately preceded_** by a sibling "prev" | [API doc](https://api.jquery.com/next-adjacent-Selector/) |
| [$('prev ~ siblings')](?selectors/siblings/) | Select all **_sibling_** elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector. | [API doc](https://api.jquery.com/next-siblings-selector/) |

| Basic Filters |||
|:--|:--|:--:|
| [$(':animated')](?selectors/animated/) | Select all elements that are **_in the progress of an animation_** at the time the selector is run. | [API doc](https://api.jquery.com/animated-selector/) |
| [$(':header')](?selectors/header/) | Select all elements that are **_headers_**, like h1, h2, h3 and so on. | [API doc](https://api.jquery.com/header-selector/) |

| Content Filters |||
|:--|:--|:--:|
| [$(':contains(text)')](?selectors/contains/) | Select all elements that **_contain_** the specified text. | [API doc](https://api.jquery.com/contains-selector/) |

## Methods

### [Attributes / CSS](?attributes/)

| Attributes |||
|:--|:--|:--:|
| [$(...).attr(name)](?attributes/attr/) | **_Get the value of an attribute for the first element_** in the set of matched elements. | [API doc](https://api.jquery.com/attr/) |
| [$(...).attr(name, value)<br />$(...).attr({name: value, ...})](?attributes/attr/) | **_Set one or more attributes for the set_** of matched elements. | ^|

### [Manipulation](?manipulation/)

| Copying |||
|:--|:--|:--:|
| [$(...).clone()](?manipulation/clone/) | Create a **_deep copy_** of the set of matched elements. | [API doc](https://api.jquery.com/clone/) |

| DOM Insertion, Around |||
|:--|:--|:--:|
| [$(...).wrap(wrappingElement \| function)](?manipulation/wrap/) | Wrap an HTML structure **_around each element_** in the set of matched elements. | [API doc](https://api.jquery.com/wrap/) |
| [$(...).wrapAll(wrappingElement \| function)](?manipulation/wrapall/) | Wrap an HTML structure **_around all elements_** in the set of matched elements. | [API doc](https://api.jquery.com/wrapAll/) |
| [$(...).wrapInner(wrappingElement \| function)](?manipulation/wrapinner/) | Wrap an HTML structure **_around the content of each element_** in the set of matched elements. | [API doc](https://api.jquery.com/wrapInner/) |

| DOM Insertion, Inside |||
|:--|:--|:--:|
| [$(...).prependTo(selector \| object)](?manipulation/prependTo/) | **_Insert_** every element in the set of matched elements **_to the beginning of the target_**. | [API doc](https://api.jquery.com/prependTo/) |
| [$(...).text()](?manipulation/text/) | Get the combined text contents of each element in the set of matched elements, including their descendants. | [API doc](https://api.jquery.com/text/) |
| [$(...).text(text \| function)](?manipulation/text/) | Set the content of each element in the set of matched elements to the specified text. | ^|

| DOM Removal |||
|:--|:--|:--:|
| [$(...).remove(selector)](?manipulation/remove/) | **_Remove_** the set of matched elements from the DOM. | [API doc](https://api.jquery.com/remove/) |

### [Traversing](?traversing/)

| Filtering |||
|:--|:--|:--:|
| [$(...).filter()](?traversing/filter/) | **_Reduce the set of matched elements_** to those that match the selector or pass the function's test. | [API doc](https://api.jquery.com/filter/) |

| Miscellaneous Traversing |||
|:--|:--|:--:|
| [$(...).contents()](?traversing/contents/) | Get the **_children_** of each element in the set of matched elements, **_including text and comment nodes_**. | [API doc](https://api.jquery.com/contents/) |
| [$(...).each((index, element?) => {...})](?traversing/each/) | **_Iterate_** over a jQuery object, **_executing a function_** for each matched element. | [API doc](https://api.jquery.com/each/) |
| [$(...).end()](?traversing/end/) | **_End_** the most recent **_filtering operation_** in the current chain and **_return_** the set of matched elements **_to its previous state_**. | [API doc](https://api.jquery.com/end/) |

| Tree Traversal |||
|:--|:--|:--:|
| [$(...).children(selector?)](?traversing/children/) | Get the **_children of each element_** in the set of matched elements, optionally filtered by a selector. | [API doc](https://api.jquery.com/children/) |
| [$(...).find(selector)](?traversing/find/) | Get the **_descendants of each element_** in the current set of matched elements, filtered by a selector, jQuery object, or element. | [API doc](https://api.jquery.com/find/) |

### [Core](?core/)

| Utilities |||
|--|--|--|
| [$.contains(container, contained)](?core/contains/) | **_Check_** to see **_if a DOM element is a descendant_** of another DOM element. | [API doc](https://api.jquery.com/jQuery.contains/) |
| [$.each(aray \| object, (index \| name, value) => {...})](?core/each/) | A generic **_iterator function_**, which can be used to seamlessly iterate **_over both objects and arrays_**. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties. | [API doc](https://api.jquery.com/jQuery.each/) |
| [$.grep(aray, (value, index?) => {...}, invert?)](?core/grep/) | **_Finds the elements of an array_** which satisfy a filter function. The original array is not affected. | [API doc](https://api.jquery.com/jQuery.grep/) |
| [$.inArray(value, array, fromIndex?)](?core/inarray/) | **_Search for a specified value_** within an array and return its index (or -1 if not found). | [API doc](https://api.jquery.com/jQuery.inArray/) |
| [$.merge(array1, array2)](?core/merge/) | **_Merge_** the contents of **_two arrays_** together **_into the first array_**. | [API doc](https://api.jquery.com/jQuery.merge/) |
| [$.trim(text)](?core/trim/) | **_Remove the whitespace_** from the beginning and end of a string. | [API doc](https://api.jquery.com/jQuery.trim/) |
----

## Misc

* [Common parts of examples](?example/)

* [jQuery API Reference](https://api.jquery.com)

* [Cheat sheet](https://oscarotero.com/jquery/) by Óscar Otero

## Test

[Test MD](?test/)
