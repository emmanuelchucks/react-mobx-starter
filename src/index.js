import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import counterState from "./stores/counterState";

ReactDOM.render(React.createElement(App, { counterState }, null), document.getElementById("app"));
