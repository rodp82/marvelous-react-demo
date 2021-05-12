import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosGet, { CharacterDataWrapper } from './marvel';

export const getCharacters = (page: number = 1, limit: number = 30): Promise<AxiosResponse<CharacterDataWrapper>> => {
  const config: AxiosRequestConfig = {
    params: {
      offset: (page-1)*limit,
      limit: limit
    }
  }
  return axiosGet('/characters', config);
}

export const getCharacter = (id: number): Promise<AxiosResponse<CharacterDataWrapper>> => {
  return axiosGet(`/characters/${id}`);
}
