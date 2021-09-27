import React from "react";
import ReactDOM from "react-dom";
import "./components/Styles/index.scss";
import Header from "./components/Header/Header.jsx";
import Results from "./components/Results/Index.jsx";
import Footer from "./components/Footer/Footer.jsx";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Header />
      <Results />
      <Footer>
        <p>
          <b>netflix</b>roulette
        </p>
      </Footer>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
