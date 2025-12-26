# Handlebars Templating – Assignment

## Overview

This assignment introduces **templating with Handlebars** in the context of web development.
The goal is to generate HTML dynamically from JSON data instead of hard-coding content or manually creating DOM elements.

You will complete two tasks:

- Task 1: Render simple JSON data using Handlebars
- Task 2: Render structured JSON data using loops and conditionals

This builds on prior knowledge of:

- HTML and CSS
- JavaScript fundamentals
- DOM manipulation
- JSON

---

## What is Handlebars?

Handlebars is a templating engine that allows you to write HTML templates with placeholders.
These placeholders are replaced with real data at runtime using JavaScript.

This approach:

- Keeps HTML readable
- Reduces repetitive DOM code
- Separates data from presentation

---

## Project Structure (Suggested)

project/
├── index.html
├── index1.tsx
├── index2.tsx
├── data.json
└── README.md

---

## Task 1 – Easy Read from JSON

### Objective

Render simple JSON data into the page using Handlebars.

### Description

You are given basic JSON data representing a single object.
Your task is to display this data using a Handlebars template.

### Example JSON

```json
{
  "name": "Jane Doe",
  "course": "Web Development",
  "year": 2025
}
```
