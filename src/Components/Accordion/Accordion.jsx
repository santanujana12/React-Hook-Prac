import React,{useState} from "react";

// Local imports
import data from "../../MockData/data";

const Accordion = ()=>{
  const [dataIndex, setDataIndex] = useState(null);

  function handleToggling(index){
    if(index===dataIndex){
      setDataIndex(null);
    }else if(index!==dataIndex){
      setDataIndex(index);
    }
  }

  return (
    <>
    {/* {console.log(data.length)} */}
      {data.map((item,index)=>{
        return (
          <div style={{width:"95%"}}>
            <h1  className="d-flex flex-row justify-content-between">{item.title}
              <button onClick={()=>handleToggling(index)}>{dataIndex===index?"-":"+"}</button>
            </h1>
            {dataIndex===index&&<p>{item.values}</p>}
          </div>
        )
      })}
    </>
  );
}
export default Accordion;