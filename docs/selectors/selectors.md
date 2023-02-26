<!-- markdownlint-disable MD041-->
[Return](../)

# Selectors

| Name | jQuery | JS | Description | Link |
|:--|:--|:--|:--|:--:|
| All | `$('*')` | `querySelectorAll('*')` | Selects **_all_** elements. | [More](?all/) |
| Class | `$('.class')` | `querySelectorAll('.class')` | Selects all elements with the given **_class_**. | [More](?class/) |
| Element | `$('element')` | `querySelectorAll('element')` | Selects all elements with the given **_tag name_**. | [More](?tag/) |
| ID | `$('#id')` | `querySelector('#id')` | Selects a single element with the given **_id_** attribute. | [More](?id/) |
| Multiple | `$('selector1, selector2, selectorN')` | `querySelectorAll('selector1, selector2, selectorN')` | Selects the **_combined results_** of all the specified selectors. | [More](?multiple/) |
| Child | `$('parent > child')` | `querySelectorAll('parent > child')` | Selects all direct child elements specified by "**_child_**" of elements specified by "parent". | [More](?child/) |
| Descendant | `$('ancestor descendant')` | `querySelectorAll('ancestor descendant')` | Selects all elements that are **_descendants_** of a given ancestor. | [More](?descendants/) |
| Next Adjacent | `$('prev + next')` | `querySelectorAll('prev + next')` | Selects all **_next_** elements matching "next" that are **_immediately preceded_** by a sibling "prev" | [More](?next/) |
| Next Siblings | `$('prev ~ siblings')` | `querySelectorAll('prev ~ siblings')` | Selects all **_sibling_** elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector. | [More](?siblings/) |
