
# CSS Tutorial Roadmap (50 to 120 Minutes)

## Introduction: What Is CSS?

CSS (**Cascading Style Sheets**) gives **style and visual structure** to your HTML.  
HTML defines the **content**, while CSS defines **appearance and layout**, like colors, spacing, fonts, and responsiveness.

By the end of this roadmap, you’ll understand how to:

- Connect CSS to HTML
- Use selectors (basic and advanced)
- Style text, colors, and layouts
- Build responsive designs
- Use pseudo-classes and pseudo-elements

---

## Part 1: CSS Basics (10 to 20 min)

### What Is a Stylesheet?

You can add CSS in three ways:

1. **Inline:**
   ```html
   <p style="color: red;">Hello!</p>
   ```
2. **Internal:** inside `<style>` tags in the `<head>`
   ```html
   <style>
     p {
       color: red;
     }
   </style>
   ```
3. **External (recommended):**
   ```html
   <link rel="stylesheet" href="style.css" />
   ```

---

### CSS Syntax

Every rule has a **selector**, **property**, and **value**:

```css
selector {
  property: value;
}
```

Example:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

---

### Selectors

| Type             | Example              | Description                                                    |
| ---------------- | -------------------- | -------------------------------------------------------------- |
| Element          | `p`                  | Selects all `<p>` tags                                         |
| Class            | `.highlight`         | Selects all elements with class `"highlight"`                  |
| ID               | `#header`            | Selects an element with id `"header"`                          |
| Descendant       | `article p`          | Selects `<p>` elements inside `<article>`                      |
| Child            | `div > p`            | Selects `<p>` elements that are _direct_ children of `<div>`   |
| Adjacent Sibling | `h2 + p`             | Selects the first `<p>` immediately after an `<h2>`            |
| General Sibling  | `h2 ~ p`             | Selects _all_ `<p>` that follow an `<h2>` (not just the first) |
| Attribute        | `input[type="text"]` | Selects all `<input>` elements with type `"text"`              |
| Universal        | `*`                  | Selects _all_ elements on the page                             |

---

## Part 2: Pseudo-Classes and Pseudo-Elements (10 to 15 min)

### Pseudo-Classes

Pseudo-classes target an element’s **state or condition**.

| Example         | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `a:hover`       | When a user hovers over a link                             |
| `a:visited`     | Styles visited links                                       |
| `input:focus`   | Styles an input field when focused                         |
| `:first-child`  | Selects the first child of its parent                      |
| `:last-child`   | Selects the last child of its parent                       |
| `:nth-child(2)` | Selects the 2nd child of a parent                          |
| `:not(.hidden)` | Selects all elements except those with the `.hidden` class |

Example:

```css
button:hover {
  background-color: #0056b3;
  color: white;
}
```

---

### Pseudo-Elements

Pseudo-elements style **parts of elements** (like the first letter or add virtual content).

| Example           | Description                            |
| ----------------- | -------------------------------------- |
| `p::first-letter` | Styles the first letter of a paragraph |
| `p::first-line`   | Styles the first line of text          |
| `::before`        | Inserts content before an element      |
| `::after`         | Inserts content after an element       |

Example:

```css
h2::before {
  content: "Star ";
}

p::first-line {
  font-weight: bold;
}
```

---

## Part 3: Colors, Text, and Fonts (10 to 20 min)

### Colors

CSS supports multiple color formats:

- Named: `color: red;`
- HEX: `color: #ff0000;`
- RGB: `color: rgb(255, 0, 0);`
- HSL: `color: hsl(0, 100%, 50%);`

---

### Text Styling

```css
p {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
}
```

---

### Fonts

You can import fonts from Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

Then apply it:

```css
body {
  font-family: "Roboto", sans-serif;
}
```

---

## Part 4: The Box Model (15 to 25 min)

Everything in CSS is a **box**.

Each element has:

1. **Content** – text or image
2. **Padding** – space between content and border
3. **Border** – the outline
4. **Margin** – space outside the border

```css
div {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
}
```

---

### Display Types

- `block` – takes full width (e.g., `<div>`, `<p>`)
- `inline` – fits around content (e.g., `<span>`, `<a>`)
- `inline-block` – inline but can set width/height
- `none` – hides the element

---

## Part 5: Positioning and Layout (15 to 25 min)

### The `position` Property

| Type       | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| `static`   | Default, follows normal document flow                       |
| `relative` | Moved relative to its original position                     |
| `absolute` | Positioned relative to its parent (if parent is positioned) |
| `fixed`    | Stays in place while scrolling                              |
| `sticky`   | Acts like relative until scrolled, then sticks              |

Example:

```css
header {
  position: sticky;
  top: 0;
  background-color: white;
}
```

---

### Flexbox Basics

Align items easily in a row or column.

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

### Grid Basics

Create two or more columns for layout:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}
```

---

## Part 6: Styling Common Elements (10 to 15 min)

### Links

```css
a {
  color: blue;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  color: darkblue;
}
```

---

### Lists

```css
ul {
  list-style-type: square;
  padding-left: 20px;
}
li:first-child {
  color: darkred;
}
```

---

### Tables

```css
table,
th,
td {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
}
tr:nth-child(even) {
  background-color: #f9f9f9;
}
```

---

## Part 7: Responsive Design (10 to 15 min)

### Viewport Meta Tag

Add this inside `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Media Queries

Change layout for smaller screens:

```css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }

  nav {
    flex-direction: column;
  }
}
```

---

## Accessibility and Best Practices (5 to 10 min)

- Use **relative units** (`em`, `%`, `rem`) for scalability
- Maintain **good contrast** between text and background
- Don’t rely only on **color** to show meaning
- Always define **hover and focus** states
- Organize your CSS with **comments and spacing**
- Prefer **external stylesheets** for maintainability

---

## Summary

You should now be confident with:

- Linking CSS to HTML
- Using selectors, pseudo-classes, and pseudo-elements
- Styling text, layout, and structure
- Understanding the box model
- Using Flexbox and Grid
- Writing responsive and accessible CSS

Next step → Style your HTML CV project using these concepts and expand with your own custom colors, animations, and layout!
