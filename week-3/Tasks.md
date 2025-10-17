# CSS Tasks

## Part 1: Basic Styling (Warm-up)

### Goal: Make the CV readable and clean.

**Instructions:**

1. Change the font of the entire page to something nice (like Arial, Roboto, or Open Sans).
2. Give the page a light background color (e.g. `#f5f5f5`) and a contrasting text color.
3. Center the `<header>` text and make the name `<h1>` stand out:
   - Larger font size  
   - Bold text  
   - Slight text-shadow (optional)
4. Make links (`<a>`) have one color normally, and another on hover.
5. Give each `<section>` some padding and spacing between them.
6. Make the `<table>` under “Education” readable:
   - Add alternating row colors using `:nth-child(even)`.
   - Remove default borders and use clean, simple borders.

---

## Part 2: Layout (Flexbox or Grid)

### Goal: Learn layout structuring.

**Instructions:**

1. Place the navigation bar (`<nav>`) horizontally centered under the header.
2. Use Flexbox to space out the links evenly.
3. Add a background color and rounded corners to the navigation bar.
4. Make the main content (`<main>`) use CSS Grid or Flexbox:
   - Example: two columns — one narrower for “Profile” and “Skills”, one wider for “Education” and “Experience”.
   - Add spacing between columns.
5. Keep everything responsive:
   - On smaller screens (`max-width: 768px`), stack all content vertically.

---

## Part 3: Pseudo-selectors & Elements

### Goal: Learn the use of pseudo-selectors and pseudo-elements.

**Instructions:**

1. Use `:hover` on navigation links to make them change color or show an underline animation.
2. Use `::before` or `::after` to add icons or decorations before section headings.
   - Example: add “📘 ” before each `<h2>`.
3. Use `:nth-child()` to style alternating rows in the education table.
4. Use `:first-child` or `:last-child` on list items in the “Skills” section for special highlighting.
5. Use `::selection` to change the highlight color when text is selected.

---

## Optional Challenge (for fast students)

1. Add a sticky navigation bar that remains visible while scrolling.
2. Use a hover effect to add a border or background transition to section headings.
3. Add a box-shadow around sections or cards to make them stand out.
4. Give the `<footer>` a contrasting dark background with white text.
