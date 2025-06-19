import type {CharacterType} from "../types/CharacterType.ts";

export const getCharacters = async () => {
    const res = await fetch('https://swapi.info/api/people');
    return await res.json();
}

export const createCharacter = async (data: CharacterType) => {
    const res = await fetch(`https://swapi.info/api/people`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    return await res.json() as CharacterType;
}