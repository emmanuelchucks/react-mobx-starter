import React from "react";
import { render } from "react-dom";

import App from "./App";

import counterState from "./stores/counterState";

render(React.createElement(App, { counterState }, null), document.getElementById("app"));
