import React from "react";
import {specials} from "../../../data";

const Specials = (props) => {
  const {setNumberState, numberState, setOperatorState, setEquation} = props;
  const specBtn = specials.map(sp => {
    return(<button key = {sp} 
    
    onClick = {e => {
      setOperatorState("");
      if (sp === "C"){
        setNumberState(0);
        
        setEquation([]);
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
