import React,{useState} from 'react'
import Todo from './Todo'


const TodoList = ({val,setVal,filterTodo}) => {
    return (
     <div className="todo-container">
         <ul className="todo-list">
             {filterTodo.map((e)=>(
                 <Todo  setVal={setVal} val={val} e={e} text={e.text} key={e.id}/>
             ))}
         </ul>
         
     </div>
    )
}

export default TodoList