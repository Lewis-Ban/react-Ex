import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function App() {
  let [x, setX] = useState(1);

  let flexDirection = x <= 4 ? "row" : "column";

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: flexDirection
      }}
    >
      <button onClick={() => setX(x + 1)}>+</button>
      {new Array(x).fill(0).map(() => (
        <button>hi</button>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
