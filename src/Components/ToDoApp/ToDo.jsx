import React,{useState} from "react";

const ToDo=()=>{
  const [todoList,setTodoList] = useState([]);

  const [todoInput,setTodoInput] = useState("");

  function handleSubmit(){
    const newTodo={id:Math.random(),todo:todoInput,checked:false};
    // 
    setTodoList([...todoList,newTodo]);
    setTodoInput("");
  }

  function handleToDoDelete(id){
    const filteredArr=todoList.filter((item)=>item.id!==id)
    setTodoList(filteredArr);
  }

  function handleToDoUpdate(id,type){
    switch(type){
      case 'checked':
      default:return;
    }
  }

  return(
    <>
      <input type="text" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}/>
      <button onClick={handleSubmit}>Add Task</button>
      <h3>List of All ToDo</h3>
      <ul>
        {todoList.map((item)=>
        <li key={item.id}>
          <input type="checkbox" checked={item.checked} onChange={()=>handleToDoUpdate(item.id,"checked")}/>
          {item.todo}
          <button onClick={()=>handleToDoDelete(item.id)}>Delete</button>
        </li>)}
      </ul>
    </>
  );
}
export default ToDo;