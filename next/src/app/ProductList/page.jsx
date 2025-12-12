import { useMemo, useReducer } from "react";

const PRODUCTS = [
  { id: 1, name: "Laptop", category: "tech", price: 1000 },
  { id: 2, name: "Phone", category: "tech", price: 600 },
  { id: 3, name: "Chair", category: "furniture", price: 150 },
  { id: 4, name: "Table", category: "furniture", price: 300 },
];

const initialState = {
  category: "all",
  sort: "asc",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    default:
      return state;
  }
}

export default function ProductList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const visibleProducts = useMemo(() => {
    let result =
      state.category === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === state.category);

    result = [...result].sort((a, b) =>
      state.sort === "asc" ? a.price - b.price : b.price - a.price
    );

    return result;
  }, [state.category, state.sort]);

  return (
    <div>
      <select
        value={state.category}
        onChange={(e) =>
          dispatch({ type: "SET_CATEGORY", payload: e.target.value })
        }
      >
        <option value="all">All</option>
        <option value="tech">Tech</option>
        <option value="furniture">Furniture</option>
      </select>

      <button
        onClick={() =>
          dispatch({
            type: "SET_SORT",
            payload: state.sort === "asc" ? "desc" : "asc",
          })
        }
      >
        Sort: {state.sort}
      </button>

      <ul>
        {visibleProducts.map((p) => (
          <li key={p.id}>
            {p.name} — ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
