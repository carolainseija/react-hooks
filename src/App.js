import React, {useReducer} from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {

  const handlerClick = () => {
    return (
    console.log('click')
    )
  }
  
  return (
    <div className="App">
    <Button />
    </div>
  );
}

export default App;
