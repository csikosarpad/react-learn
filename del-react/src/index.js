import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import SampleCreateElement from "./components/CreateElementSample";
import SampleComponent from "./components/ComponentSample";
import SamplePureComponent from "./components/PureComponentSample";
import FunctionComponentSample from "./components/FunctionalComponentSample";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Header />
      <SampleCreateElement />
      <SampleComponent />
      <SamplePureComponent />
      <FunctionComponentSample />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
