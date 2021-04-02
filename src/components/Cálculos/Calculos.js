import { useState } from 'react';

export default function Calculos({operacion, onDelet}){
    const [result, setResult] = useState()
    const handleOperacion = () => {
        var num1 = operacion.num1;
        var num2 = operacion.num2;
        var signo = operacion.signo;
        
       switch (signo) {
           case '+':
                suma(num1, num2);
               break;
           case '-':
                resta(num1, num2);
                break;
            case 'x':
                multiplicacion(num1, num2);
                break;
            case '/':
                division(num1, num2);
                break;
           default:
               break;
       }
    }
    const suma = (num1, num2) => {
        var suma = num1 + num2;
        setResult(suma);
        
    }
    const resta = (num1, num2) => {
        var resta = num1 - num2;
        setResult(resta);
    }
    const multiplicacion = (num1, num2) => {
        var multi = num1 * num2;
        setResult(multi);
        
    }
    const division = (num1, num2) => {
        var division = (num1 / num2);
        setResult(division);
    }
    const handleDelet = () => {
        setResult('')
        onDelet()
    }
    return(
        <div>
            <button onClick={handleOperacion}>=</button>
            <button onClick={handleDelet}>AC</button>
            <div>{result}</div>
        </div>
    )
}