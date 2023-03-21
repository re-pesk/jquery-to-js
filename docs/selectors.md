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

{.category-list}

* [Selectors](?selectors.md) [~doc~](//api.jquery.com/category/selectors/)
  * [Attribute]() [~doc~](//api.jquery.com/category/selectors/attribute-selectors/)
  * [Basic](?basic.md) [~doc~](//api.jquery.com/category/selectors/basic-css-selectors/)
  * [Basic Filter](?basic-filter.md) [~doc~](//api.jquery.com/category/selectors/basic-filter-selectors/)
  * [Child Filter]() [~doc~](//api.jquery.com/category/selectors/child-filter-selectors/)
  * [Content Filter](?content-filter.md) [~doc~](//api.jquery.com/category/selectors/content-filter-selector/)
  * [Form]() [~doc~](//api.jquery.com/category/selectors/form-selectors/)
  * [Hierarchy](?hierarchy.md) [~doc~](//api.jquery.com/category/selectors/hierarchy-selectors/)
  * [jQuery Extensions](?jquery-extensions.md) [~doc~](//api.jquery.com/category/selectors/jquery-selector-extensions/)
  * [Visibility Filter]() [~doc~](//api.jquery.com/category/selectors/visibility-filter-selectors/)

## [Basic](?basic.md) ([API doc](https://api.jquery.com/category/selectors/basic-css-selectors/))

|:--|:--|:--:|
| ['*'](?pages/all/) | Select **_all_** elements. | [API doc](https://api.jquery.com/all-selector/) |
| ['.class'](?pages/class/) | Select all elements with the given **_class_**. | [API doc](https://api.jquery.com/class-selector/) |
| ['element'](?pages/element/) | Select all elements with the given **_tag name_**. | [API doc](https://api.jquery.com/element-selector/) |
| ['#id'](?pages/id/) | Select a single element with the given **_id_** attribute. | [API doc](https://api.jquery.com/id-selector/) |
| ['selector1, selector2, ...'](?pages/multiple/) | Select the **_combined results_** of all the specified selectors. | [API doc](https://api.jquery.com/multiple-selector/) |

## [Basic Filter](?basic-filter.md) ([API doc](https://api.jquery.com/category/selectors/basic-filter-selectors/))

|:--|:--|:--:|
| [':animated'](?pages/animated/) | Select all elements that are **_in the progress of an animation_** at the time the selector is run. | [API doc](https://api.jquery.com/animated-selector/) |
| [':header'](?pages/header/) | Select all elements that are **_headers_**, like h1, h2, h3 and so on. | [API doc](https://api.jquery.com/header-selector/) |

## [Content Filter](?content-filter.md) ([API doc](https://api.jquery.com/category/selectors/content-filter-selector/))

|:--|:--|:--:|
| [':contains()'](?pages/contains/) | Select all elements that **_contain_** the specified text. | [API doc](https://api.jquery.com/contains-selector/) |

## [Hierarchy](?hierarchy.md) ([API doc](https://api.jquery.com/category/selectors/hierarchy-selectors/))

|:--|:--|:--:|
| ['parent > child'](?pages/child/) | Select all direct child elements specified by "**_child_**" of elements specified by "parent". | [API doc](https://api.jquery.com/child-selector/) |
| ['ancestor descendant'](?pages/descendant/) | Select all elements that are **_descendants_** of a given ancestor. | [API doc](https://api.jquery.com/descendant-selector/) |
| ['prev + next'](?pages/next/) | Select all **_next_** elements matching "next" that are **_immediately preceded_** by a sibling "prev" | [API doc](https://api.jquery.com/next-adjacent-Selector/) |
| ['prev ~ siblings'](?pages/siblings/) | Select all **_sibling_** elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector. | [API doc](https://api.jquery.com/next-siblings-selector/) |

## [jQuery Extensions](?jquery-extensions.md) ([API doc](https://api.jquery.com/category/selectors/jquery-selector-extensions/))

|:--|:--|:--:|
| [':animated'](?pages/animated/) | Selects all elements that are **_in the progress of an animation_** at the time the selector is run. | [API doc](https://api.jquery.com/) |
