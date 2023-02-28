# Equivalents of jQuery selectors in Vanilla JavaScript

| **Selectors** ||||
|:--|:--|:--|:--:|
| Name in<br>API Reference | jQuery | Description | Examples |
| [' * '](https://api.jquery.com/all-selector/) | `$('*')` | Select **_all_** elements. | [Go](?all/) |
| [.class](https://api.jquery.com/class-selector/) | `$('.class')` | Select all elements with the given **_class_**. | [Go](?class/) |
| [tagName](https://api.jquery.com/element-selector/) | `$('tagName')` | Select all elements with the given **_tag name_**. | [Go](?tag/) |
| [#id](https://api.jquery.com/id-selector/) | `$('#id')` | Select a single element with the given **_id_** attribute. | [Go](?id/) |
| [selector1, selector2, ...](https://api.jquery.com/multiple-selector/) | `$('selector1, selector2, selectorN')` | Select the **_combined results_** of all the specified selectors. | [Go](?multiple/) |
| [parent > child](https://api.jquery.com/child-selector/) | `$('parent > child')` | Select all direct child elements specified by "**_child_**" of elements specified by "parent". | [Go](?child/) |
| [ancestor descendant](https://api.jquery.com/descendant-selector/) | `$('ancestor descendant')` | Select all elements that are **_descendants_** of a given ancestor. | [Go](?descendants/) |
| [prev + next](https://api.jquery.com/next-adjacent-Selector/) | `$('prev + next')` | Select all **_next_** elements matching "next" that are **_immediately preceded_** by a sibling "prev" | [Go](?next/) |
| [prev ~ siblings](https://api.jquery.com/next-siblings-selector/) | `$('prev ~ siblings')` | Select all **_sibling_** elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector. | [Go](?siblings/) |
| [:animated](https://api.jquery.com/animated-selector/) | `$(':animated')` | Select all elements that are **_in the progress of an animation_** at the time the selector is run. | [Go](?animated/) |
| [:header](https://api.jquery.com/header-selector/) | `$(':header')` | Select all elements that are **_headers_**, like h1, h2, h3 and so on. | [Go](?header/) |
| [:contains()](https://api.jquery.com/contains-selector/) | `$(':contains(text)')` | Select all elements that **_contain_** the specified text. | [Go](?contains/) |
