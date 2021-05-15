import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { config } from '../config';
import MD5 from "crypto-js/md5";
import { CharacterDataWrapper } from '../models';

// Request interceptor to setup the apikey and hash query params
const axiosReqAuth = async (reqConfig: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const ts = new Date().toISOString();
  const hash = MD5(`${ts}${config.marvelApi.privateKey}${config.marvelApi.publicKey}`);

  reqConfig.params = {
    ...reqConfig.params,
    hash: hash.toString(),
    ts: ts,
    apikey: config.marvelApi.publicKey
  };

  return reqConfig;
};

// Axios Instance to setup base URL and request headers
const axiosGet = axios.create({
  baseURL: config.marvelApi.baseUrl,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

axiosGet.interceptors.request.use(axiosReqAuth);


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

export const getCharacterComics = (id: number): Promise<AxiosResponse<CharacterDataWrapper>> => {
  return axiosGet(`/characters/${id}/comics`);
}
