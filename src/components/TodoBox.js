import { useState } from 'react';
import '../styles/TodoBox.css';
import TodoList from './TodoList';

export default function TodoBox (){
  const [todoText, setTodoText] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const [text, setText] = useState('');
  
  const onChange = (e)=>{
    
    setTodoText(e.target.value)
  }
  const onSubmit = (e)=>{
    
    if(todoText.length){
    todoItems.push(todoText);
    }
    setTodoText("")
  }
  const onDelet= ()=>{
    if(todoItems.length){
      setTodoItems([])
    }
  }
  
  const add = (e)=>{
    if(e.keyCode == 13){
        if(todoText.length){
            todoItems.push(todoText);
            }
            setTodoText("")
    }
    
  }
  
  return(
    <div className="TodoBox">
        <input type='text' value={todoText} onChange={onChange} onKeyDown={add} className='TodoBox-input'/>
        <button
        onClick={onSubmit} 
        className='TodoBox-button'>Agregar</button>
        <button
        onClick={onDelet} 
        className='TodoBox-button'>Borrar Todo</button>
        <ul>
            <TodoList items={todoItems} />
        </ul>
    </div>
  )
}