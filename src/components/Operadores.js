import { useState } from 'react';

export default function Numeros({ onSigno }){
    
    const handleOperacion = (e) => {
        
        onSigno(e.target.value);
    }
    var operadores = ['+', '-', 'x', '/'];
    const items = operadores.map(i => <button value={i} onClick={handleOperacion}>{i}</button>); 

    return(
        <div>
            {items}
        </div>
    )
}