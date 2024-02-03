import React,{useState} from "react";

const TogglingDiv = ()=>{
  const [isToggled,setisToggled]=useState(false);

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div style={{height:"150px", width:"150px",backgroundColor:"red",alignSelf:(isToggled?"flex-end":"flex-start")}}/>
      <div style={{height:"150px", width:"150px",backgroundColor:"green",alignSelf:"center",display:"flex"}}>
        <button style={{alignSelf:"center",marginLeft:"50px",cursor:"pointer"}} onClick={()=>setisToggled(!isToggled)}>Toggle</button>
      </div>
      <div style={{height:"150px", width:"150px",backgroundColor:"blue",alignSelf:(isToggled?"flex-start":"flex-end")}}/>
    </div>
  )
}
export default TogglingDiv;