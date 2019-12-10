import React from "react";

const Display = (props) => {
  const {numberState, operatorState} = props;
  return <div className="display">{numberState}{operatorState}</div>;
};

export default Display;