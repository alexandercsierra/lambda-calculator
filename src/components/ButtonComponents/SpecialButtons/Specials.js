import React from "react";
import {specials} from "../../../data";

const Specials = (props) => {
  const {setNumberState, numberState, setOperatorState} = props;
  const specBtn = specials.map(sp => {
    return(<button key = {sp} 
    
    onClick = {e => {
      if (sp === "C"){
        setNumberState(0);
        setOperatorState("");
      } else if (sp === "+/-"){
          setNumberState(numberState * -1);
      } else if (sp === "%"){
          setNumberState(numberState * .01);
      }
    }}
    
    
    >{sp}</button>);
  })

  return (
    

    <div>
    {specBtn}
    </div>
  );
};

export default Specials;
