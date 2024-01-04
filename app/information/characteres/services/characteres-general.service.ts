import { ICharacter } from "../models";


export const getCharacteresV2 = async (): Promise<ICharacter[]> => {
    const url = "https://rickandmortyapi.com/api/character";

    const res = await fetch(url);
    const data = await res.json();
    return data;
}