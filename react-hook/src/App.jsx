// 1. Using useContext 

import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <CounterDisplay />
    </CounterContext.Provider>
  );
}

function CounterDisplay() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
