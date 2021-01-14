
import { useState } from 'react';
function Counter() {

    const [counter, setCounter] = useState(0); // usar o estado do React para alterar valor de algo 

    const handleIncrease = () => {
        setCounter(counter + 1);
    }
    
    const handleDecrease = () => {
        setCounter(counter - 1);        
    }

    return (
        <div>
            <button onClick={handleIncrease}> Incrementar</button>
            <button onClick={handleDecrease}>Decrementar</button>
            <h1>Valor do contador: {counter}</h1>
        </div>
    )
}

export default Counter;