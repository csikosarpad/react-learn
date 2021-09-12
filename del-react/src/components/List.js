import React from "react";

function toggleOpen(elem) {
  elem.preventDefault();
  const componentBoxes = document.querySelectorAll(".componentBox");
  const target = elem.target.href.split("#")[1];
  componentBoxes.forEach((item) => {
    document.getElementById(`${item.id}`).style.display = "none";
  });
  document.getElementById(`${target}`).style.display = "block";
}

function List() {
  return (
    <div className="selector-container">
      <section className="App-List">
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

export default List;
