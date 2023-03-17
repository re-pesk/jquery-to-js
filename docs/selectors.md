<!-- markdownlint-disable MD012 -->
# Selectors

Equivalents of jQuery selectors in Vanilla JavaScript

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
| [$('*')](?all/) | Select **_all_** elements. | [API doc](https://api.jquery.com/all-selector/) |
| [$('.class')](?class/) | Select all elements with the given **_class_**. | [API doc](https://api.jquery.com/class-selector/) |
| [$('tagName')](?tagname/) | Select all elements with the given **_tag name_**. | [API doc](https://api.jquery.com/element-selector/) |
| [$('#id')](?id/) | Select a single element with the given **_id_** attribute. | [API doc](https://api.jquery.com/id-selector/) |
| [$('selector1, selector2, ...')](?multiple/) | Select the **_combined results_** of all the specified selectors. | [API doc](https://api.jquery.com/multiple-selector/) |


| Hierarchy |||
|:--|:--|:--:|
| [$('parent > child')](?child/) | Select all direct child elements specified by "**_child_**" of elements specified by "parent". | [API doc](https://api.jquery.com/child-selector/) |
| [$('ancestor descendant')](?descendant/) | Select all elements that are **_descendants_** of a given ancestor. | [API doc](https://api.jquery.com/descendant-selector/) |
| [$('prev + next')](?next/) | Select all **_next_** elements matching "next" that are **_immediately preceded_** by a sibling "prev" | [API doc](https://api.jquery.com/next-adjacent-Selector/) |
| [$('prev ~ siblings')](?siblings/) | Select all **_sibling_** elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector. | [API doc](https://api.jquery.com/next-siblings-selector/) |


| Basic Filters |||
|:--|:--|:--:|
| [$(':animated')](?animated/) | Select all elements that are **_in the progress of an animation_** at the time the selector is run. | [API doc](https://api.jquery.com/animated-selector/) |
| [$(':header')](?header/) | Select all elements that are **_headers_**, like h1, h2, h3 and so on. | [API doc](https://api.jquery.com/header-selector/) |


| Content Filters |||
|:--|:--|:--:|
| [$(':contains(text)')](?contains/) | Select all elements that **_contain_** the specified text. | [API doc](https://api.jquery.com/contains-selector/) |
