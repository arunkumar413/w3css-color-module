import React from "react";
import ReactDOM from "react-dom";

import w3colors from "./w3-colors.module.css";
import "./mystyle.css";

var elements = Object.keys(w3colors).map(function (e, i) {
  return (
    <div>
      <div className={w3colors[e] + " element"} key={i}>
        <h1>
          {"."}
          {e}
        </h1>
      </div>
      <button className={w3colors[e]}> BUTTON </button>
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <h2>
        {" "}
        A list of w3css colors for use in Header, Footer, Cards, Buttons etc,
        <a href="https://www.w3schools.com/w3css/w3css_color_libraries.asp">
          {" "}
          <a href="https://www.w3schools.com/w3css/w3css_color_libraries.asp" />
          https://www.w3schools.com/w3css/w3css_color_libraries.asp{" "}
        </a>
      </h2>

      <div className="container">{elements} </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
