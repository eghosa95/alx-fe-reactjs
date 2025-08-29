import { useState } from "react";

export default function Counter() {
  // state for count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Current Count: {count}
      </p>
      <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}
