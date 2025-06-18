import React, {createContext, type FormEvent, useContext, useState} from "react";

const ContextChild2 = () => {
    console.log("child 2");
    const message = useContext(MessageContext);
    const updateMessage = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        message?.setMessage(target.value);
    }
    return (
        <>
            <h3>Coucou from Child 2</h3>
            <p>Message : {message?.message}</p>
            <input value={message?.message} onInput={updateMessage}/>
        </>
    )
}

const ContextChild = () => {
    console.log("child 1");
    return (
        <>
            <h2>Coucou from Child 1</h2>
            <ContextChild2 />
        </>
    )
}

const MessageContext = createContext<{
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>}
    | null>(null)

const Contexte = () => {
    const [message, setMessage] = useState('Vive les compteurs !');

    return (
        <MessageContext.Provider value={ {message, setMessage} }>
            <h1>UseContexte</h1>
            <ContextChild />
        </MessageContext.Provider>
    )
}

export default Contexte;

