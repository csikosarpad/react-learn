import React from "react";
import ReactDOM from "react-dom";

import logo from "./logo.svg";
import "./App.css";

function toggleOpen(elem) {
  elem.preventDefault();
  const componentBoxes = document.querySelectorAll(".componentBox");
  const target = elem.target.href.split("#")[1];
  componentBoxes.forEach((item) => {
    document.getElementById(`${item.id}`).style.display = "none";
  });
  document.getElementById(`${target}`).style.display = "block";
}

/**
 *
 *  createElement
 *
 */

const el = React.createElement;

function Button(props) {
  return el("button", { onClick: props.handleClick }, props.name);
}

class Counter extends React.Component {
  state = {
    num: 0,
  };

  handleIncrement = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      num: this.state.num - 1,
    });
  };

  render() {
    return el(
      "div",
      null,
      el(
        Button,
        { handleClick: this.handleIncrement, name: "Increment" },
        null
      ),
      el(
        Button,
        { handleClick: this.handleDecrement, name: "Decrement" },
        null
      ),
      el("p", null, this.state.num)
    );
  }
}

ReactDOM.render(
  el(Counter, null, null),
  document.querySelector("#createElement .content")
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Learning - Core Concepts - Home Task 1</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-Content">
        <div className="list">
          <p>
            <a href="#createElement" onClick={toggleOpen}>
              React.createElement
            </a>
          </p>
          <p>
            <a href="#component" onClick={toggleOpen}>
              React.Component
            </a>
          </p>
          <p>
            <a href="#pureComponent" onClick={toggleOpen}>
              React.PureComponent
            </a>
          </p>
          <p>
            <a href="#functionalComponent" onClick={toggleOpen}>
              Functional component
            </a>
          </p>
        </div>
        <div id="createElement" className="closed componentBox">
          <h2>React.createElement</h2>
          <div className="content">content</div>
        </div>
        <div id="component" className="closed componentBox">
          <h2>React.Component</h2>
          <div className="content">content</div>
        </div>
        <div id="pureComponent" className="closed componentBox">
          <h2>React.PureComponent</h2>
          <div className="content">content</div>
        </div>
        <div id="functionalComponent" className="closed componentBox">
          <h2>Functional Component</h2>
          <div className="content">content</div>
        </div>
      </section>
    </div>
  );
}

export default App;
