import React,{useState,useEffect} from "react";

// Local imports
import data from "../../MockData/data";

const Accordion = ()=>{
  const [dataIndex,setDataIndex] = useState(null);
  const [allIndex,setAllIndex]=useState([]);

  useEffect(()=>{
    let newArr = new Array(data.length).fill(false);
    setAllIndex(newArr);
  },[])

  // Action based on single index
  // function handleToggling(index){
  //   console.log(index)
  //   if(index===dataIndex){
  //     setDataIndex(null);
  //   }else if(index!==dataIndex){
  //     setDataIndex(index);
  //   }
  // }

  function handleToggling(index){
    // One approach
    // setAllIndex(prevAllIndex=>{
    //   return prevAllIndex.map((item,idx)=>{
    //     if(index===idx){
    //       console.log(item);
    //       return !item;
    //     }else{
    //       return item;
    //     }
    //   })
    // })

    // second approach
    let newArr = [...allIndex];
    newArr[index]=!newArr[index];
    setAllIndex(newArr);
  }


  return (
    <>
    {/* {console.log(allIndex)} */}
      {data.map((item,index)=>{
        return (
          <div key={item.index} style={{width:"95%"}}>
            <h1  className="d-flex flex-row justify-content-between">{item.title}
              <button onClick={()=>handleToggling(index)}>{allIndex[index]?"-":"+"}</button>
            </h1>
            {/* {dataIndex===index&&<p>{item.values}</p>} */}
            {allIndex[index]&&<p>{item.values}</p>}
          </div>
        )
      })}
    </>
  );
}
export default Accordion;