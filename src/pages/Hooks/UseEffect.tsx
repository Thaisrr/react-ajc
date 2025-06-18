import {useState} from "react";

const UseEffect = () => {
    console.log('Lancement de la fonction composant');

    const [counter, setCounter] = useState(0);
    let staticCounter = 0;

    const incrementStatic = () => {
        staticCounter++;
    }

    return (
        <>
            <h1>Use Effect</h1>

            <p>
                <button onClick={() => setCounter(p => p + 1)} >Reactif : {counter}</button>
            </p>
            <p>
                <button onClick={incrementStatic}>Static: {staticCounter}</button>
            </p>
        </>
    )
}

export default UseEffect;