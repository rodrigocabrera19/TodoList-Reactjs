import logo from './logo.svg';
import './styles/App.css';
import TodoBox from './components/TodoBox'

import { useState } from 'react';

function App() {
  
  

  return (
    <div className="App">
      <h1 className='app-title'>Mi primer TodoList</h1>
      <TodoBox /> 
      
    </div>
  );
}

export default App;
