import {useCallback, useMemo, useRef, useState} from "react";

export const Memoisation = () => {
    const notes = [12, 20, 19, 14];
    const getMoyenne = () => {
        console.log('Calcule de moyenne');
        const sum = notes.reduce((sum: number, curr: number) => sum + curr, 0);
        return sum / notes.length;
    }

    const [name, setName] = useState('Jean Michel');
    const inputRef = useRef <HTMLInputElement>(null);
    const updateName = () => {
        if(inputRef.current) {
            setName(inputRef.current.value);
        }
    }

    const [notes2, setNotes2] = useState([15, 16, 14, 18]);
    const moyenneMemo = useMemo(() => {
        console.log('Calcule de moyenne memoisée');
        const sum = notes2.reduce((sum, curr) => sum + curr, 0);
        return sum / notes2.length;
    }, [notes2]);

    const moyenneCallback = useCallback((color: string) => {
        console.log('%c Calcul de la moyenne', `background: ${color}`)
        const sum = notes2.reduce((sum, curr) => sum + curr, 0);
        return sum / notes2.length;
    }, [notes2]);



    return (
        <>
            <h1>Le Memoïsation</h1>

            <p>Moyenne : {getMoyenne()}</p>
            <p>Moyenne Mémoïsée : {moyenneMemo}</p>

            <p>
                <button onClick={() => moyenneCallback('yellow')}>Moyenne - yellow</button>
            </p>

            <p>Name : {name}</p>
            <p>
                <input ref={inputRef} />
                <button onClick={updateName}>Update</button>
            </p>
        </>
    )
}

export default Memoisation;