import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <header className="header">
      <h1>React Learning - Core Concepts - Home Task 1</h1>
      <img src={logo} className="app-logo" alt="logo" />
    </header>
  );
}

export default Header;
