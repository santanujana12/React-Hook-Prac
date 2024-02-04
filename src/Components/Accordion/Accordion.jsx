import React,{useState} from "react";

// Local imports
import data from "../../MockData/data";

const Accordion = ()=>{
  const [index,setIndex] = useState(0);

  return (
    <>
      {data.map(item=>{
        return (
          <>
            <h1>{item.title}</h1>
            <p>{item.values}</p>
          </>
        )
      })}
    </>
  );
}
export default Accordion;