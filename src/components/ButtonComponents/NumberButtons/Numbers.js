import React from "react";
import {numbers} from "../../../data";

const Numbers = (props) => {
  const {setNumberState, setEquation, setOperatorState, numberState} = props;

  const numBtn = numbers.map(num => {
    return(<button key = {num} onClick = {e => {
      //take last numberState, mult by 10, add new num, set numberState

      let newNum = (numberState * 10) + Number(num);
      if (newNum > 10){
        setNumberState(newNum);
        
        // setEquation(newNum);
      } else {
        setNumberState(Number(num));
        // setEquation(Number(num));
        // setEquation(oldArray => [...oldArray, numberState]);
      }
      
      setOperatorState("");
      
    }}>{num}</button>);
  })

  const divStyle = {
    
  }

  return (
    

    <div>
    {numBtn}
    </div>
  );
};

export default Numbers;