import {useState} from "react";

const Reactivite = () => {

    let count = 0;

    const stateArray = useState('Hello World');
    const state = stateArray[0];
    const setState = stateArray[1];
    let [counterDynamic, setCounterDynamic] = useState<number>(0);

    const increment = () => {
        count++;
        console.log(count);
    }

    const decrement = () => {
        count--;
        console.log(count);
    }

    const setTo10 = () => {
        setCounterDynamic(10);
    }

    const incrementDynamic = () => {
        setCounterDynamic(previous => previous + 1);
    }

    const decrementDynamic = () => {
        setCounterDynamic(previous => previous - 1);
    }


    return (
        <>
            <h1>La Réactivité</h1>

            <section>
                <h2>Compteur A : {count}</h2>
                <p>
                    <button onClick={() => decrement()}>-</button>
                    <button onClick={increment}>+</button>
                </p>
            </section>

            <section>
                <h2>Counter dynamique : {counterDynamic}</h2>
                <div>
                    <button onClick={setTo10}>10</button>
                    <button onClick={decrementDynamic}>-</button>
                    <button onClick={incrementDynamic}>+</button>
                </div>

            </section>
        </>
    )
}

export default Reactivite;