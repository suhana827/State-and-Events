import React, { useState } from "react";
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);


  return (
    <div className="myClass">
      <h1 id="myheading">Counter: {count}</h1>
      <div className="buttons">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
    </div>
  );
}

export default Counter;
