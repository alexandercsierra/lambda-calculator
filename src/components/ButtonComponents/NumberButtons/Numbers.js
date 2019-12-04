import React from "react";
import {numbers} from "../../../data";

const Numbers = (props) => {
  const {setNumberState} = props;
  const numBtn = numbers.map(num => {
    return(<button key = {num} onClick = {e => {setNumberState(num)}}>{num}</button>);
  })

  return (
    

    <div>
    {numBtn}
    </div>
  );
};

export default Numbers;