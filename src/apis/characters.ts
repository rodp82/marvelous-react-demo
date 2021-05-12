import { AxiosResponse } from 'axios';
import axiosGet, { CharacterDataWrapper } from './marvel';

export const getCharacters = (): Promise<AxiosResponse<CharacterDataWrapper>> => {
  return axiosGet('/characters');
}

export const getCharacter = (id: number): Promise<AxiosResponse<CharacterDataWrapper>> => {
  return axiosGet(`/characters/${id}`);
}
