import React,{useReducer} from 'react';

function reducer(state,action){
  switch (action.type){
    case 'INCREMENT':
      return state+1;
    default:
      throw new Error();
  }
}

const Count = () =>{
  const [count,dispatch] = useReducer(reducer,0);

  function handleClick(){
    dispatch({type:'INCREMENT',state:1})
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
} 

export default Count;
