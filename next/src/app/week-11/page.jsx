"use client";

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  createContext,
} from "react";

/*
  SINGLE PAGE HOOKS SHOWCASE (JS / JSX)
  -----------------------------------
  Styled for clarity in teaching:
  - Clear visual separation
  - Obvious buttons vs text
  - Theme visibly affects UI
*/

/* -----------------------------
   Context Setup (useContext)
----------------------------- */
const ThemeContext = createContext("light");

/* -----------------------------
   Child for useCallback demo
----------------------------- */
const CallbackChild = React.memo(({ onClick }) => {
  console.log("CallbackChild rendered");
  return (
    <button
      className="rounded-md bg-gray-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
      onClick={onClick}
    >
      Child Button
    </button>
  );
});

/* -----------------------------
   Expensive function (useMemo)
----------------------------- */
function expensiveCalculation(num) {
  console.log("expensiveCalculation running");
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total += num;
  }
  return total;
}

/* =============================
   MAIN PAGE COMPONENT
============================= */
export default function HooksShowcasePage() {
  console.log("Page rendered");

  /* -------- useState -------- */
  const [count, setCount] = useState(0);

  /* -------- useRef -------- */
  const renderCount = useRef(0);
  const [manualRenders, setManualRenders] = useState(0);

  /* -------- useEffect -------- */
  useEffect(() => {
    console.log("useEffect ran -> count:", count);
    renderCount.current++;
  });

  /* -------- useMemo -------- */
  const memoResult = useMemo(() => expensiveCalculation(count), [count]);

  /* -------- useCallback -------- */
  const memoizedCallback = useCallback(() => {
    console.log("Memoized callback fired");
  }, []);

  /* -------- useContext -------- */
  const [theme, setTheme] = useState("light");

  const pageClasses =
    theme === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-gray-50";

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`min-h-screen p-8 font-sans transition-colors duration-200 ${pageClasses}`}
      >
        <h1 className="mb-6 text-3xl font-bold">
          React Hooks – Side-by-Side Showcase
        </h1>

        {/* ================= useState ================= */}
        <Section title="useState" theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
            Count
          </p>
          <p className="mb-3 text-2xl font-bold">{count}</p>
          <button
            className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setCount((c) => c + 1)}
          >
            Increment
          </button>
        </Section>

        {/* ================= useEffect ================= */}
        <Section title="useEffect" theme={theme}>
          <p className="mb-2 text-sm leading-relaxed">
            Runs after render when dependencies change.
          </p>
          <p className="text-xs opacity-60">Open the console to see logs.</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              className="rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => {
                console.log("Rendered again (manual trigger)");
                setManualRenders((r) => r + 1);
              }}
            >
              Re-render without updating count
            </button>
            <p className="text-xs opacity-70">
              Manual re-renders: {manualRenders}
            </p>
          </div>
        </Section>

        {/* ================= useRef ================= */}
        <Section title="useRef" theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
            Render count (no re-render)
          </p>
          <p className="text-2xl font-bold">{renderCount.current}</p>
          <button
            className="mt-3 rounded-md bg-purple-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onClick={() => {
              renderCount.current++;
              setManualRenders((r) => r + 1);
              console.log("useRef incremented manually");
            }}
          >
            Increment render count ref
          </button>
        </Section>

        {/* ================= useMemo ================= */}
        <Section title="useMemo" theme={theme}>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
            Memoized result
          </p>
          <p className="mb-3 text-2xl font-bold">{memoResult}</p>
          <p className="mb-2 text-sm leading-relaxed">
            Expensive calculation only runs when <strong>count</strong> changes.
          </p>
        </Section>

        {/* ================= useCallback ================= */}
        <Section title="useCallback" theme={theme}>
          <p className="mb-2 text-sm leading-relaxed">
            Child component should not re-render on count changes.
          </p>
          <CallbackChild onClick={memoizedCallback} />
        </Section>

        {/* ================= useContext ================= */}
        <Section title="useContext" theme={theme}>
          <ThemeConsumer />
          <button
            className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          >
            Toggle Theme
          </button>
        </Section>
      </div>
    </ThemeContext.Provider>
  );
}

/* -----------------------------
   Reusable Section Wrapper
----------------------------- */
function Section({ title, children, theme = "light" }) {
  const sectionStyles =
    theme === "light"
      ? "border-gray-300 bg-white/90"
      : "border-gray-700 bg-black/40";

  return (
    <section
      className={`mb-5 rounded-lg border p-4 shadow-sm backdrop-blur transition-colors ${sectionStyles}`}
    >
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

/* -----------------------------
   Context Consumer
----------------------------- */
function ThemeConsumer() {
  const theme = useContext(ThemeContext);
  console.log("ThemeConsumer rendered");

  return (
    <p className="mb-2 text-sm leading-relaxed">
      Current theme from context: <strong>{theme}</strong>
    </p>
  );
}
