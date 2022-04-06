import React, { useState } from "react";
import Context from "./Context/Context";
import Counter from "./pages/Counter";

function App() {

  const [count, setCount] = useState(0);

  const HandlerAdd = () => {
    setCount(count + 1)
    console.log('count:', count)
  }

  const HandlerRemove = () => {
    setCount(count - 1)
    console.log('count:', count)
  }

  const valueContext = {
    HandlerAdd,
    HandlerRemove,
  }

  return (
    <div>
      <h1>Contador</h1>
      {count}
      <Context.Provider value={valueContext}>
        <Counter />
      </Context.Provider>
    </div>
  )
};

export default App;
