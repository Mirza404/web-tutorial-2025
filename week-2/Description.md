### Week 2 
HTML boilerplate / skeleton

#### Part 1
Character encoding (`<meta charset="utf-8">`)

`<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`

Basic page structure

Core HTML concepts & syntax

What is HTML, how tags / elements / attributes work

Opening & closing tags, nested tags, valid structure

Common attributes (like `id`, `class`, `style`)

Essential tags / content structuring  
Start adding content to your page with:

Headings: `<h1>` … `<h6>`

Paragraphs: `<p>`

Line breaks, horizontal rules: `<br>`, `<hr>`

Links: `<a href="…">`

Images: `<img src="…" alt="…">`

Lists: `<ul>`, `<ol>`, `<li>`

Divs & spans: `<div>`, `<span>` (but remember they are generic)

Emphasis, strong: `<em>`, `<strong>`

Semantic / structural tags  
These are tags that give meaning (not just styling):

`<header>`, `<nav>`, `<main>`, `<footer>`  


`<section>`, `<article>`, `<aside>`

`<figure>`, `<figcaption>`

`<blockquote>`

`<time>`, `<address>`, `<mark>`, etc.  
The idea: use these instead of always using `<div>` when it makes sense.  
 calls these “semantic elements”

---

#### Part 2
Tables (a bit special but important)

Since you explicitly called out tables:

Basic table structure

`<table>` container

`<tr>` table row

`<th>` – table header cell

`<td>` – table data cell

`<caption>` – caption for the table

Attributes & features

`colspan` and `rowspan` for merging cells

`border`, `cellpadding`, `cellspacing` (though in modern HTML/CSS you’ll often style via CSS)

`<thead>`, `<tbody>`, `<tfoot>` (to semantically separate parts)

When **NOT** to use tables:

Don’t use tables for layout, because that’s bad practice (tables are for tabular data)
---

#### Part 3
Accessibility (so your site doesn’t suck for people)

Accessibility in HTML means making your webpage usable by everyone, including people with disabilities (visual impairment, motor disabilities, cognitive limitations, etc.).

Here are the key things to cover in your first tutorial:

Use semantic HTML  
As already noted: using correct tags (`<header>`, `<nav>`, `<main>`, `<article>`, etc.) helps assistive technologies understand your page structure.  

Alternative text for images (`alt`)  
Every `<img>` should have an `alt` attribute describing the image (for screen readers).

Labels for form controls  
If you include forms later, always associate `<label>` with `<input>` (using `for` attribute) so screen readers know what the input is for.  

Heading structure & levels  
Use headings in a hierarchical order (`h1` → `h2` → `h3`, not jumping `h1` → `h4`).  
This helps screen reader users scan content.  

Keyboard accessibility / interactive elements  
Make sure links and buttons can be used by keyboard (Tab, Enter).  
Don’t rely solely on mouse events.  

Landmarks / page regions  
The semantic tags above are also “landmarks” so screen reader users can jump to sections (`<header>`, `<nav>`, `<main>`, `<footer>`) easily.  

Color contrast  
Make sure text vs background has enough contrast so people with low vision or colorblindness can read.  

Error messages & feedback  
If you make forms later, errors should be perceivable (not only color), understandable, etc.

ARIA / roles / accessibility metadata  
If you ever create custom controls (not just using built-in HTML), you may need ARIA attributes (`role`, `aria-label`, etc.).  
But for a first tutorial, you can mostly avoid heavy ARIA and use native HTML first.
