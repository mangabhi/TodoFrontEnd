import React, { useState ,useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText,setInputText]=useState("")
  const [val,setVal]=useState([])
  const [status,setStatus]=useState("All")
  const [filterVal,setFilterVal]=useState([])

useEffect(()=>{
    filterTodo();
},[val,status])


  const filterTodo=()=>{
    switch(status){
      case 'completed':
        setFilterVal(val.filter(e=>e.completed===true))
        break;
        case 'uncompleted':
          setFilterVal(val.filter(e=>e.completed===false))
          break;
        default:
          setFilterVal(val);
          break;  
        
    }
  }

  return (
    <div className="App">
     <header>
       What Todo ??
     </header>
     <Form setInputText={setInputText} inputText={inputText} val={val} setVal={setVal} setStatus={setStatus} />
     <TodoList setVal={setVal} val={val}  filterTodo={filterVal}/>
    </div>
  );
}

export default App;
