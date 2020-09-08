import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [num, setNum] = React.useState(0);

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}>-</button>
    </div>
  );
}

export default App;
