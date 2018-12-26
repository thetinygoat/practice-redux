import React from "react";

const counter = props => {
  return (
    <div>
      <p>{props.counter}</p>
      <button onClick={props.inc}>Increment</button>
      <button onClick={props.dec}>Decrement</button>
      <button onClick={props.add}>Add 5</button>
      <button onClick={props.sub}>Subtract 5</button>
    </div>
  );
};
export default counter;
