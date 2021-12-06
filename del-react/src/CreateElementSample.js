/**
 *
 *  createElement
 *
 */
import React from "react";
import ReactDOM from 'react-dom';

const elem = React.createElement;

function Button(props) {
    return elem("button", { onClick: props.handleClick }, props.name);
}

class Counter_CreateSample extends React.Component {
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
        return elem(
            "div",
            null,
            elem(
                Button,
                { handleClick: this.handleIncrement, name: "Increment" },
                null
            ),
            elem(
                Button,
                { handleClick: this.handleDecrement, name: "Decrement" },
                null
            ),
            elem("p", null, this.state.num)
        );
    }
}

//export default Counter_CreateSample;

ReactDOM.render(
  elem(Counter, null, null),
  document.querySelector("#createElement .content")
);

