import React, { Component } from "react";

function getGreeting(user) {
  if (user) {
    return <h1>Helló, {user}!</h1>;
  }
  return <h1>Helló, idegen.</h1>;
}

class App extends React.Component {
  render() {
    var style = {
      color: "red",
      fontSize: 50,
    };
    return (
      <div style={style}>
        Hello World with JSX!!!
        <span>{getGreeting("Árpi")}</span>
      </div>
    );
  }
}
export default App;
