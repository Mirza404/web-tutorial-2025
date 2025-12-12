# React Hooks – Core Concepts & Demonstrations

This tutorial is structured in two parts:

1. **Theory** – what each hook is for and how to think about it.
2. **Demonstration files** – small, focused components you can drop into an existing React app to *see the difference in behavior*.

Assumption:

* You already have a working React app (Vite / CRA / Next client component, etc.)
* You understand basic React components and props

---

## 1. useState

### Theory

`useState` lets a component hold **local, reactive state**. When state changes, React re-renders the component.

Key ideas:

* State updates are **asynchronous**
* Updating state triggers a re-render
* State is isolated per component instance

In case you forgot what asynchronous is: In JavaScript, async is a keyword used to define an asynchronous function that always returns a Promise, allowing operations that might take time (like fetching data over a network) to run without blocking the main program thread. The related keyword await can only be used inside an async function to pause its execution until the Promise is settled (either resolved or rejected)

Typical use cases:

* Counters
* Form inputs
* UI toggles (modals, dropdowns)

### Demo File: `UseStateDemo.jsx`

```jsx
import { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

Teaching point:

* Emphasize that changing `count` causes a re-render

---

## 2. useEffect

### Theory

`useEffect` handles **side effects** — code that runs *because* the component rendered.

Examples of side effects:

* Fetching data
* Subscribing/unsubscribing
* Interacting with browser APIs

Dependency array behavior:

* No array → runs after **every render**
* `[]` → runs **once on mount**
* `[value]` → runs when `value` changes

### Demo File: `UseEffectDemo.jsx`

```jsx
import { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran. Count:", count);
  }, [count]);

  return (
    <div>
      <h2>useEffect Demo</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
```

Teaching point:

* Show how effects re-run when dependencies change

---

## 3. useRef

### Theory

`useRef` stores a **mutable value that does NOT trigger re-renders**.

Two main uses:

1. Accessing DOM elements
2. Persisting values across renders

Key difference from `useState`:

* Changing `.current` does NOT re-render

### Demo File: `UseRefDemo.jsx`

```jsx
import { useRef, useState } from "react";

export default function UseRefDemo() {
  const renders = useRef(0);
  const [count, setCount] = useState(0);

  renders.current++;

  return (
    <div>
      <h2>useRef Demo</h2>
      <p>Renders: {renders.current}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Re-render</button>
    </div>
  );
}
```

Teaching point:

* `useRef` survives renders without causing them

---

## 4. useMemo

### Theory

`useMemo` memoizes the **result of a computation**.

Use it when:

* A calculation is expensive
* You want to avoid recalculating unless dependencies change

⚠️ Do NOT use it everywhere — it’s a performance optimization, not a feature.

### Demo File: `UseMemoDemo.jsx`

```jsx
import { useMemo, useState } from "react";

function expensiveCalculation(num) {
  console.log("Running expensive calculation...");
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += num;
  }
  return result;
}

export default function UseMemoDemo() {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);

  const calculated = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>useMemo Demo</h2>
      <p>Result: {calculated}</p>
      <button onClick={() => setCount(c => c + 1)}>Change Count</button>
      <button onClick={() => setToggle(t => !t)}>Toggle UI</button>
    </div>
  );
}
```

Teaching point:

* Toggling UI does NOT re-run expensive calculation

---

## 5. useCallback

### Theory

`useCallback` memoizes a **function reference**.

Useful when:

* Passing callbacks to memoized child components
* Preventing unnecessary re-renders

Think of it as:

> `useMemo`, but for functions

### Demo File: `UseCallbackDemo.jsx`

```jsx
import { useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <h2>useCallback Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

Teaching point:

* Child does not re-render when parent state changes

---

## 6. useContext

### Theory

`useContext` allows components to **consume shared state** without prop drilling.

Good for:

* Theme
* Auth user
* Language / settings

Not a replacement for all state management.

### Demo Files

#### `ThemeContext.js`

```jsx
import { createContext } from "react";

export const ThemeContext = createContext("light");
```

#### `UseContextDemo.jsx`

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function UseContextDemo() {
  const theme = useContext(ThemeContext);

  return <h2>Current theme: {theme}</h2>;
}
```

Teaching point:

* No props needed to access shared state

---

## Suggested Teaching Flow

1. useState → re-renders
2. useEffect → side effects
3. useRef → mutable without re-render
4. useMemo → memoized values
5. useCallback → memoized functions
6. useContext → shared state

---

If you want, next we can:

* Add a **single demo page** that switches between hooks
* Add **intentional bugs** to explain common mistakes
* Create **slides** or a **live-coding outline**
