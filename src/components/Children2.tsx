import React from "react";
import {useEffect} from "react";

export const ChildNonMemo = ({counter, increment} : { counter: number, increment: () => void  }) => {
    console.log('Child non memo création');
    useEffect(() => {
        console.log('Child non memo rendu')
    }, []);

    return (
        <>
            <h2>Child non memoïsé</h2>
            <p>Compteur : {counter}</p>
            <button onClick={() => increment()}>++</button>
        </>
    )
}

export const ChildMemo = React.memo(({counter, increment} : { counter: number, increment: () => void }) => {
    console.log('%c Child memo création', 'color: red');
    useEffect(() => {
        console.log('%c Child memo rendu', 'color: red')
    }, []);

    return (
        <>
            <h2>Child memoïsé</h2>
            <p>Compteur : {counter}</p>
            <button onClick={() => increment()}>+</button>
        </>
    )
})