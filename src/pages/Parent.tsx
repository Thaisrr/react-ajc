import {Child1, Child2, type Child2Props, Child3, MonSuperBouton} from "../components/Children.tsx";
import {useState} from "react";

const Parent = () => {
    const msg = "Bonjour le monde !";
    const [state, setState] = useState('Holà mundo !');
    const book: Child2Props = {
        title: 'Petit Ours Brun',
        author: 'Je sais pas'
    }

    const modifyState = () => {
        setState("State modifié");
    }

    return (
        <>
            <h1>Composant Parent</h1>

            <h2>Child 1 : </h2>
            <button onClick={() => modifyState()}>Modify State</button>

            <Child1 message="Hello World!" />
            <Child1 message={msg} />
            <Child1 message={state} />

            <Child2 title='Hunger Games' author='Suzanne Collins' />
            <Child2 {...book} />

            <Child3 book={book} />

            <MonSuperBouton children='Cliquez ici' />
            <MonSuperBouton>
                <span>Ne cliquez pas ici !</span>
            </MonSuperBouton>

            <MonSuperBouton id='mon-id' className='autre-classe' level="secondary" color='danger'>
                Attention, bouton dangereux !
            </MonSuperBouton>


        </>
    )
}

export default Parent;