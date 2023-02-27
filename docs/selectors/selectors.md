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
| :animated Selector | `$(':animated')` | `querySelectorAll('.animated')` | Selects all elements that are **_in the progress of an animation_** at the time the selector is run. | [More](?animated/) |
| :header Selector | `$(':header')` | `querySelectorAll('h, h2, h3, h4, h5, h6')` | Selects all elements that are **_headers_**, like h1, h2, h3 and so on. | [More](?header/) |
| :lang() Selector | `$(':lang(xx)')` | `querySelectorAll(':lang(xx)')` | Selects all elements of the specified **_language_**. | |
| :not() Selector | `$(':not(selector)')` | `querySelectorAll(':not(selector)')` | Selects all elements that do **_not_** match the given selector. | |
| :root Selector | `$(':root')` | `querySelectorAll(':root')` | Selects the element that is the **_root_** of the document (**_html_** element). | |
| :target Selector | `$(':target')` | `querySelectorAll(':target')` | Selects the target element indicated by the **_fragment identifier_** of the document's URI. | |
| :contains() Selector | `$(':contains(text)')` | `qq('div').forEach(element => (element.innerText.includes('John') && <some operations>))` | Select all elements that contain the specified text. | [More](?contains/) |
| :empty Selector | `$(':empty')` | `querySelectorAll(':empty')` | Select all elements that have no children (including text nodes). | |
