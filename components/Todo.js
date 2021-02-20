import React from 'react'

const Todo = ({text,val,e,setVal}) => {
    const deleteHandler=()=>{
            setVal(val.filter((r)=>r.id!==e.id))
    }

    const checHandler=()=>{
            setVal(val.map((item)=>{
                if(item.id===e.id){
                    return {
                        ...item, completed:!item.completed
                    }
                }
                return item;
            }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${e.completed?"completed":""}`}>{text}</li>
               <button onClick={checHandler} className="complete-btn"><i className="fas fa-check"></i></button>
               <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button> 
            
        </div>
    )
}

export default Todo
