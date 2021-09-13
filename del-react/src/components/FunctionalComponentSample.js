import React, { useState } from "react";
/**
 * sample content
 * <div>
 *   <button>Increase</button>
 *   <button>Decrease</button>
 *   <p></p>
 * </div>
 */
const FunctionComponentSample = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((currentCount) => currentCount + 1);
  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  return (
    <div className="counter-container component-box">
      <h2>React Functional Component</h2>
      <Button handleClick={handleDecrement}>Decrement</Button>
      <Button handleClick={handleIncrement}>Increment</Button>
      <p>{count}</p>
    </div>
  );
};

const Button = ({ handleClick, children }) => (
  <button type="button" onClick={handleClick}>
    {children}
  </button>
);

export default FunctionComponentSample;
