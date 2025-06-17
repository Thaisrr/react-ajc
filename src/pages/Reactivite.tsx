import {useRef, useState} from "react";

const Reactivite = () => {

    let count = 0;

    //const stateArray = useState('Hello World');
   // const state = stateArray[0];
   // const setState = stateArray[1];
    const [counterDynamic, setCounterDynamic] = useState<number>(0);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [books, setBooks] = useState<string[]>([]);
    const newBook = useRef<HTMLInputElement | null>(null);

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

    const login = () => {
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    const LoggedInBlock = () => (
        <div>
            <h3>Bonjour Jean Michel</h3>
            <p>
                <button onClick={logout}>Logout</button>
            </p>
        </div>
    );

    const LogoutBlock = () => (
        <div>
            <h3>Vous n'êtes pas connecté•e</h3>
            <p>
                <button onClick={login}>Login</button>
            </p>
        </div>
    )

    const addBook = () => {
        console.log(newBook.current?.value);
        if(newBook.current?.value) {
            const value = newBook.current?.value;
            setBooks(prev => [...prev, value]);
            newBook.current.value = '';
        }
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

            <section>
                <h2>Login / Logout</h2>

                {isLoggedIn ? <LoggedInBlock /> : <LogoutBlock />}
            </section>

            <section>
                <h2>Mes livres</h2>

                <p>
                    <input ref={newBook}/>
                    <button onClick={addBook}>Add</button>
                </p>

                <ul>
                    {books.map((book) => (<li key={book}>{book}</li> ))}
                </ul>
            </section>
        </>
    )
}

export default Reactivite;