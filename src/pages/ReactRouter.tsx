import {useParams, useSearchParams} from "react-router-dom";

const ReactRouter = ({title} : {title: string}) => {
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');


    return (
        <>
            <h1>{title}</h1>

            <p>1. Installer react router : <code>npm i react-router-dom</code></p>
            <p>2. Englober l'application dans <code>{'<BrowserRouter></BrowserRouter>'}</code></p>
            <p>3. Configurer les Routes dans App.tsx</p>

            <h2>Les paramétres</h2>

            <p>id : {id}</p>
            <p>name : {name}</p>
        </>
    )
}

export default ReactRouter;