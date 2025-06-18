import {useEffect, useState} from "react";

//const PI = 3.14;
console.log('Outside component')

const UseEffect = () => {
    console.log('Lancement de la fonction composant');

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    let staticCounter = 0;

    const incrementStatic = () => {
        staticCounter++;
        console.log('increment static', staticCounter);
    }

    useEffect(() => {
        // A éviter : se lance à chaque re-rendu du composant
        console.log('UseEffect - Pas de dépendence')
    });

    useEffect(() => {
        // Pour faire une action quand le composant est monté
        console.log('UseEffect - Dépendance vide')
    }, []);

    useEffect(() => {
        // A chaque fois que counter est modifié
        // Si vous utilisé un state, ou une donnée, ou une fonction dans le useEffect,
        // Vous êtes obligé de le mettre dans le tableau de dépendances
        console.log('Counter a été modifié', counter)
    }, [counter]);

    useEffect(() => {
        // Ne se lancera qu'une fois au démarrage du composant
        // UseEffect ne peut surveiller que des valeurs réactives
        console.log('Static counter a été modifié', staticCounter);
    }, [staticCounter]);

    useEffect(() => {
        let time = 0;
        const interval = setInterval(() => {
            time++;
            console.log(time)
        }, 1000);
        // Ce retour va se lancer juste avant que le composant soit démonté
        return () => {
            console.log('Démontage du composant');
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        // s'affiche après la modification
        console.log('Modification de counter 2', counter2);
        return () => console.log('[Return] Modification de counter 2', counter2);
        // Le return se lance avant la modification de counter2
    }, [counter2])





    return (
        <>
            <h1>Use Effect</h1>

            <p>
                <button onClick={() => setCounter(p => p + 1)} >Reactif : {counter}</button>
            </p>
            <p>
                <button onClick={() => setCounter2(p => p + 1)} >Reactif : {counter2}</button>
            </p>
            <p>
                <button onClick={incrementStatic}>Static: {staticCounter}</button>
            </p>
        </>
    )
}

export default UseEffect;