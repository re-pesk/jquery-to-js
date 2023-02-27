# Equivalents of jQuery selectors in Vanilla JavaScript

| **Selectors** ||||
|:--|:--|:--|:--:|
| Name | jQuery | Description | Link |
| All | `$('*')` | Select **_all_** elements. | [More](?all/) |
| Class | `$('.class')` | Select all elements with the given **_class_**. | [More](?class/) |
| Element | `$('element')` | Select all elements with the given **_tag name_**. | [More](?tag/) |
| ID | `$('#id')` | Select a single element with the given **_id_** attribute. | [More](?id/) |
| Multiple | `$('selector1, selector2, selectorN')` | Select the **_combined results_** of all the specified selectors. | [More](?multiple/) |
| Child | `$('parent > child')` | Select all direct child elements specified by "**_child_**" of elements specified by "parent". | [More](?child/) |
| Descendant | `$('ancestor descendant')` | Select all elements that are **_descendants_** of a given ancestor. | [More](?descendants/) |
| Next Adjacent | `$('prev + next')` | Select all **_next_** elements matching "next" that are **_immediately preceded_** by a sibling "prev" | [More](?next/) |
| Next Siblings | `$('prev ~ siblings')` | Select all **_sibling_** elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector. | [More](?siblings/) |
| :animated | `$(':animated')` | Select all elements that are **_in the progress of an animation_** at the time the selector is run. | [More](?animated/) |
| :header | `$(':header')` | Select all elements that are **_headers_**, like h1, h2, h3 and so on. | [More](?header/) |
| :contains() | `$(':contains(text)')` | Select all elements that contain the specified text. | [More](?contains/) |
