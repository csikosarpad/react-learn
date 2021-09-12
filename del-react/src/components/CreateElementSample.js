import React from "react";

/**
 * sample content
 * <div>
 *   <button>Increase</button>
 *   <button>Decrease</button>
 *   <p></p>
 * </div>
 */
const crElement = React.createElement;

function Button(props) {
  return crElement("button", { onClick: props.handleClick }, props.name);
}

class SampleCreateElement extends React.Component {
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
    return crElement(
      "div",
      {
        className: "counter-container component-box",
      },
      crElement("h2", null, "React.CreateElement"),
      crElement(
        Button,
        { handleClick: this.handleDecrement, name: "Decrement" },
        null
      ),
      crElement(
        Button,
        { handleClick: this.handleIncrement, name: "Increment" },
        null
      ),
      crElement("p", null, this.state.num)
    );
  }
}

export default SampleCreateElement;
