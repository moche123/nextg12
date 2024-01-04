import { ICharacter } from "../models";
import sleep from "sleep-promise";


export const getCharacteres = async (): Promise<ICharacter[]> => {
    const url = "https://rickandmortyapi.com/api/character";

    const res = await fetch(url);
    const data = await res.json().then(sleep(2000));
    return data.results;
}