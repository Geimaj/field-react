import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
require("./style/main.scss")
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);

require('./scripts/app')