import logo from './logo.svg';
import './App.css';
import Numeros from './components/Numeros'
import { useState } from 'react';

function App() {
  const [result, setReult] = useState();
  

  return (
    <div className="App">
      <Numeros /> 
      
    </div>
  );
}

export default App;
