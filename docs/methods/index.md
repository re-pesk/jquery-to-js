<!-- markdownlint-disable MD041-->
[Return](../)

# Equivalents of jQuery methods in Vanilla JavaScript

| **Methods** |||||
|:--|:--|:--|:--|:--:|
| Name | jQuery | JS | Description | Link |
| .clone() | `$(selector).clone()` | `querySelector(selector).cloneNode(true)` | Create a **_deep copy_** of the set of matched elements. | [More](?clone/) |
| .prependTo() | `$(selector).prependTo(selector)` | `querySelector(selector).prepend(querySelector(selector))` | **_Insert_** every element in the set of matched elements **_to the beginning of the target_**. | [More](?prependTo/) |
