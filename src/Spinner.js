import React from "react";

const Spinner = (props) => (
  <div className='ui active inverted dimmer'>
    <div className='ui big text loader'>{props.text}</div>
  </div>
);

Spinner.defaultProps = { text: "Loading..." };

export default Spinner;
