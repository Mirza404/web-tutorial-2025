# 🎨 CSS Tutorial Roadmap (50–120 Minutes)

## 🧠 Introduction: What Is CSS?

CSS (**Cascading Style Sheets**) is what we use to style our HTML.  
While HTML defines **structure and content**, CSS defines **style and layout** — colors, fonts, spacing, alignment, and responsiveness.

#### In the last tutorial, we used only HTML. The page looked very bland and there was a limited amount of creativity involved.

By the end of this lesson, you should understand how to **connect CSS to HTML**, use basic **selectors and properties**, and create **visually structured web pages**.

---

## 🧩 Part 1 – CSS Basics (10–20 min)

### 🗂 What Is a Stylesheet?

A stylesheet contains rules that tell the browser how elements should look.  
You can include CSS in three ways:

1. **Inline:**
   ```html
   <p style="color: red;">Hello</p>
   ```

2. **Internal:** inside `<style>` in the `<head>`

   ```html
   <style>
     p { color: red; }
   </style>
   ```

3. **External (recommended):**

   ```html
   <link rel="stylesheet" href="style.css">
   ```

---

### ⚙️ CSS Syntax

Every CSS rule has:

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

### 🎯 Selectors

Selectors target which HTML elements you want to style.

| Type       | Example      | Description                                   |
| ----------- | ------------ | --------------------------------------------- |
| Element     | `p`          | Selects all `<p>` tags                        |
| Class       | `.highlight` | Selects all elements with `class="highlight"` |
| ID          | `#header`    | Selects element with `id="header"`            |
| Descendant  | `article p`  | Selects `<p>` inside `<article>`              |
| Group       | `h1, h2, h3` | Applies to multiple elements                  |

---

## 🎨 Part 2 – Colors, Text, and Fonts (10–20 min)

### 🌈 Colors

You can use colors in many formats:

* Named color: `color: red;`
* HEX: `color: #ff0000;`
* RGB: `color: rgb(255, 0, 0);`
* HSL: `color: hsl(0, 100%, 50%);`

---

### ✍️ Text Styling

Common text properties:

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

### 🖋 Fonts

Web-safe fonts are built-in. For custom fonts, you can use Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

---

## 📦 Part 3 – The Box Model (15–25 min)

Everything in HTML is a **box**.
Each element has four parts:

1. **Content** – the actual text or image  
2. **Padding** – space inside the box  
3. **Border** – the line surrounding the box  
4. **Margin** – space outside the box  

Example:

```css
div {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
}
```

---

### 🧱 Display Types

* `block` – full-width elements (`<div>`, `<p>`)  
* `inline` – fits content (`<span>`, `<a>`)  
* `inline-block` – inline but can set width/height  
* `none` – hides element  

---

## 🧭 Part 4 – Positioning & Layout (15–25 min)

### 📍 The `position` Property

Controls how an element is placed:

* `static` – default (normal flow)  
* `relative` – offset from its normal position  
* `absolute` – positioned relative to parent  
* `fixed` – stays in the same place when scrolling  
* `sticky` – behaves like relative, but sticks on scroll  

---

### 🧩 Flexbox Basics

Use for easy alignment and spacing:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

### 🧱 Grid Basics

Use for multi-column layouts:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
```

---

## 🪄 Part 5 – Styling Common Elements (10–15 min)

### 🔗 Links

```css
a {
  color: blue;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
```

### 📋 Lists

```css
ul {
  list-style-type: square;
  padding-left: 20px;
}
```

### 🧾 Tables

```css
table, th, td {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
}
```

---

## 📱 Part 6 – Responsive Design (10–15 min)

### 🪟 Viewport Meta Tag

Add this in your `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 📐 Media Queries

Adjust layout for different screen sizes:

```css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

---

## ♿ Part 7 – Accessibility & Best Practices (5–10 min)

* Use **relative units** (`em`, `%`, `rem`) for scalable design  
* Maintain **good color contrast**  
* Don’t use color alone to convey meaning  
* Ensure **hover/focus states** for interactive elements  
* Keep your CSS organized and commented  

---

## 🧾 Summary

By now, you should be comfortable with:

* Linking CSS to HTML  
* Writing selectors and rules  
* Styling text, colors, and layouts  
* Understanding the box model  
* Using Flexbox/Grid for structure  
* Building responsive, accessible pages  

Next step → **Style your HTML CV project** using everything you learned above.

## Cheat Sheet
https://htmlcheatsheet.com/css/ 