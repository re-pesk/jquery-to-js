# Attributes / CSS

Equivalents of jQuery methods in Vanilla JavaScript

<style>
th { text-align: left; font-style: italic; }
tr td:nth-child(1) { width: 25rem; }
tr td:nth-child(2) { width: 60rem; }
td {
  vertical-align: top;
}
</style>

| Attributes |||
|:--|:--|:--:|
| [$(...).attr(name)](?attr/) | **_Get the value of an attribute for the first element_** in the set of matched elements. | [API doc](https://api.jquery.com/attr/) |
| [$(...).attr(name, value)<br />$(...).attr({name: value, ...})](?attr/) | **_Set one or more attributes for the set_** of matched elements. | ^|

| CSS |||
|:--|:--|:--:|
| [$(...).addClass()](?addClass/) | **_Adds_** the specified **_class(es) to each element_** in the set of matched elements. | [API doc](https://api.jquery.com/addClass/) |
