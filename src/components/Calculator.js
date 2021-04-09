import { useState } from 'react';
import '../styles/TodoBox.css';

export default function Calculator (){
  const [isSuma, setIsSuma] = useState(true);
  const [isMulti, setIsMulti] = useState(true);
  const [signo, setSigno] = useState('');
  const [memoria, setMemoria] = useState('');
  const [memoria2, setMemoria2] = useState('');
  const [arrayNum, setArrayNum] = useState([]);
  const [result, setResult] = useState();
  const [suma, setSuma] = useState(0);
  const [multi, setMulti] = useState(0);
  
  const handleOp = (e)=>{
    const element = Number(e.target.value);
    
    setMemoria2(memoria2 + element);
    setMemoria(memoria + element);
    
    if(signo === '+'){
      setSuma(suma + element)
      setMulti(0)
      setIsSuma(true)
      setIsMulti(false)
    }else if(signo === '*'){
      setMulti(multi * element)
      setSuma(0)
      setIsSuma(false)
      setIsMulti(true)
    }
    else{
      setSuma(suma + element)
      setMulti(multi + element)
    }
    setSigno('');
    console.log(suma)
  }
  const handleSigno = (e)=> {
    
    setSigno(e.target.value);
    setMemoria('');
    setMemoria2(memoria2 + e.target.value); 
    console.log(suma)
 }
  const handleIgual = (e)=>{
     setResult(isSuma ? suma : multi)  

  }

  var numer = [1,2,3,4,5];
  var s = ['+', '-', '*', '/'];
  var igual = ['='];
  var num = numer.map(value => <button value={value} onClick={handleOp}>{value}</button>)
  var s = s.map(value => <button value={value} onClick={handleSigno}>{value}</button>)
  var i = igual.map(value => <button value={value} onClick={handleIgual}>{value}</button>)

  return(
    <div>
        {num}<br/>
        {s}<br/>
        {i}<br/>
        {signo.length ? signo : memoria}<br/>
        {memoria2}<br/>
        {result}
    </div>
  )
}