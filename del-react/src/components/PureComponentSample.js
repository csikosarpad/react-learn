import React from "react";
/**
 * sample content
 * <div>
 *   <button>Increase</button>
 *   <button>Decrease</button>
 *   <p></p>
 * </div>
 */

class SamplePureComponent extends React.PureComponent {
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
        <h2>React.PureComponent</h2>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>{this.state.num}</p>
      </div>
    );
  }
}

export default SamplePureComponent;
