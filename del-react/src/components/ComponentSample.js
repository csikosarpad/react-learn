import React from "react";

/**
 * sample content
 * <div>
 *   <button>Increase</button>
 *   <button>Decrease</button>
 *   <p></p>
 * </div>
 */

class SampleComponent extends React.Component {
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
    return (
      <div className="counter-container component-box">
        <h2>React.Component</h2>
        <button onClick={this.handleDecrement}>--</button>
        <button onClick={this.handleIncrement}>++</button>
        <p>{this.state.num}</p>
      </div>
    );
  }
}

export default SampleComponent;
