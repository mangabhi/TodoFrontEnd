import React from 'react'

const Form = ({setInputText,inputText,val,setVal,setStatus,filterTodo}) => {
    const inputTxtHandler=(e)=>{
        console.log(e.target.value)
       setInputText(e.target.value);
    }
    const submiTeventHandler=(e)=>{
            
        e.preventDefault();
            setVal([
                ...val,{text:inputText,completed:false,id:Math.random()*1000}
            ]);
           setInputText(" ");
    }
    const statusHandler=(e)=>{
        console.log(e.target.value);
        setStatus(e.target.value)
    }
    return (
        <form >
            <input type="text" value={inputText} onChange={inputTxtHandler} className="todo-input"/>
            <button onClick={submiTeventHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"/>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">ALL</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
