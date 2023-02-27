<!-- markdownlint-disable MD041-->
[Return](../)

# Equivalents of jQuery selectors in Vanilla JavaScript

| **Selectors** |||||
|:--|:--|:--|:--|:--:|
| Name | jQuery | JS | Description | Link |
| All | `$('*')` | `querySelectorAll('*')` | Select **_all_** elements. | [More](?all/) |
| Class | `$('.class')` | `querySelectorAll('.class')` | Select all elements with the given **_class_**. | [More](?class/) |
| Element | `$('element')` | `querySelectorAll('element')` | Select all elements with the given **_tag name_**. | [More](?tag/) |
| ID | `$('#id')` | `querySelector('#id')` | Select a single element with the given **_id_** attribute. | [More](?id/) |
| Multiple | `$('selector1, selector2, selectorN')` | `querySelectorAll('selector1, selector2, selectorN')` | Select the **_combined results_** of all the specified selectors. | [More](?multiple/) |
| Child | `$('parent > child')` | `querySelectorAll('parent > child')` | Select all direct child elements specified by "**_child_**" of elements specified by "parent". | [More](?child/) |
| Descendant | `$('ancestor descendant')` | `querySelectorAll('ancestor descendant')` | Select all elements that are **_descendants_** of a given ancestor. | [More](?descendants/) |
| Next Adjacent | `$('prev + next')` | `querySelectorAll('prev + next')` | Select all **_next_** elements matching "next" that are **_immediately preceded_** by a sibling "prev" | [More](?next/) |
| Next Siblings | `$('prev ~ siblings')` | `querySelectorAll('prev ~ siblings')` | Select all **_sibling_** elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector. | [More](?siblings/) |
| :animated | `$(':animated')` | `querySelectorAll('.animated')` | Select all elements that are **_in the progress of an animation_** at the time the selector is run. | [More](?animated/) |
| :header | `$(':header')` | `querySelectorAll('h, h2, h3, h4, h5, h6')` | Select all elements that are **_headers_**, like h1, h2, h3 and so on. | [More](?header/) |
| :lang() | `$(':lang(xx)')` | `querySelectorAll(':lang(xx)')` | Select all elements of the specified **_language_**. | |
| :not() | `$(':not(selector)')` | `querySelectorAll(':not(selector)')` | Select all elements that do **_not_** match the given selector. | |
| :root | `$(':root')` | `querySelectorAll(':root')` | Select the element that is the **_root_** of the document (**_html_** element). | |
| :target | `$(':target')` | `querySelectorAll(':target')` | Select the target element indicated by the **_fragment identifier_** of the document's URI. | |
| :contains() | `$(':contains(text)')` | `querySelectorAll('div').forEach(element => (element.innerText.includes('John') && <some operations>))` | Select all elements that contain the specified text. | [More](?contains/) |
| :empty | `$(':empty')` | `querySelectorAll(':empty')` | Select all elements that have no children (including text nodes). | |
| :hidden | `$(':hidden')` | `querySelectorAll('[hidden]')` | Select all elements that are hidden. | |
