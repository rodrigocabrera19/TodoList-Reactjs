import { useState } from 'react';
import '../styles/TodoBox.css';

export default function TodoBox ({Submit, Items}){
  const [todoText, setTodoText] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const [text, setText] = useState('');
  
  const onChange = (e)=>{
    setTodoText(e.target.value)
  }
  const onSubmit = ()=>{
   todoItems.push(todoText);
   setText(todoItems.map(value => <li>{value}</li>))
    console.log(todoItems)
    setTodoText("")
  }
  
  return(
    <div className="TodoBox">
        <input type='text' value={todoText} onChange={onChange}/>
        <button onClick={onSubmit}>Agregar</button>
        <ul>
           {text}
        </ul>
    </div>
  )
}