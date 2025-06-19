import {useMutation, useQuery} from "@tanstack/react-query";
import type {CharacterType} from "../utils/types/CharacterType.ts";
import {createCharacter, getCharacters} from "../utils/services/StarWarsService.ts";
import {useAlert} from "../utils/hooks/useAlert.ts";

const Tanstack = () => {

    const createAlert = useAlert();

    const {data, isLoading, isError, refetch} = useQuery<CharacterType[]>({
        queryKey: ['people'],
        initialData: () => [],
        queryFn: () => getCharacters(),
    });

    const handleSubmit = async () => {
        // Récupére les données du formulaire
        mutate({id: '123', name: 'Jean Michel Jedi'});
    }

    const {mutate} = useMutation<CharacterType, unknown, CharacterType>({
        mutationFn: (char: CharacterType) => createCharacter(char),
        onSuccess: () => {
            refetch();
            createAlert({text: 'Youpi ça fonctionne', level: 'success'})
        },
        onError: () => createAlert({text: 'Oups !', level: 'error'})
    });



    if(isLoading) return <p>Chargement en cours...</p>
    if(isError) return <p>Oups, quelque chose s'est mal passé !</p>

    return (
        <>
            <h1>Tanstack Query ( React Query )</h1>

            <ul>
                {data?.map((character: CharacterType) => (
                    <li key={character.name}>{character.name}</li>
                ))}
            </ul>

            <p>
                <button onClick={() => handleSubmit()}>Save datas</button>
            </p>
        </>
    )
}
export default Tanstack;