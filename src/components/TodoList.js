import '../styles/TodoList.css';
import { useState } from 'react';


export default function TodoBox ({items}){
    

    const item = items.map((value, i) => <li class='col-md-11' key={i}>{value}</li>)
    
    
    return(
      <div className='todoList-items'>
        {item}
      </div>
    )
  }
  