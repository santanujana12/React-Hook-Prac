import React,{useReducer,useState,useEffect} from 'react';

function reducer(state,action){
  switch (action.type){
    case 'INCREMENT':
      return action.payload.count;
    default:
      throw new Error();
  }
}

const Count = () =>{
  const [count,dispatch] = useReducer(reducer,0);
  const [count2,setCount2] = useState(0);

  useEffect(()=>{
    setCount2(prev=>prev+1);
  },[])

  function handleClick(){
    dispatch({type:'INCREMENT',payload:{count:count+1}})
  }

  return (
    <>
      <h1>{count}</h1>
      <h4>{count2}</h4>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
} 

export default Count;
