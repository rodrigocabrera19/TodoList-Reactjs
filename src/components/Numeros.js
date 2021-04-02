import { useState } from 'react';
import Operadores from './Operadores'
import Calculos from './Cálculos/Calculos'

export default function Calculator (){
    const [num, setNum] = useState(0);
    const [n, setN] = useState([]);
    const [result, setResult] = useState();
    const [nums, setNums] = useState({
        num1: 0,
        num2: 0,
        signo:''
    })   
    var buttons = [1, 2, 3, 4,5,6,7,8,9,0];
    
    const handleOperacion = (e) => {
        
        setNum(e.target.value)
        n.push(Number(e.target.value))
        nums.num1 = n[0];
        nums.num2 = n[1];
    }
    
    console.log(nums)
    
    
  const items = buttons.map(i => <button value={i} onClick={handleOperacion}>{i}</button>); 
    
    
  const handleSigno = (signo) => {
    setNum(signo)
    nums.signo = signo;
  }
  const handleDelet = () => {
    setNum(0)
    
  }

    return(
        <div style={{height:'45px', backgroundColor:'blue', display:'flex', flexDirection:'column'}}>
            <div style={{height:'45px', backgroundColor:'grey'}}>{num}</div>
            {items}
            <Operadores onSigno={handleSigno}/> 
            <Calculos operacion={nums} onDelet={handleDelet} />
            
        </div>
    )


}