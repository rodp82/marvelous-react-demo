import axios, { AxiosRequestConfig } from 'axios';
import { config } from '../config';
import MD5 from "crypto-js/md5";

// Request interceptor to setup the apikey and hash query params
const axiosReqAuth = async (reqConfig: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const ts = new Date().toISOString();
  const hash = MD5(`${ts}${config.marvelApi.privateKey}${config.marvelApi.publicKey}`);

  reqConfig.params = {
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

/**
 * Data model interfaces from https://developer.marvel.com/docs
 */
export interface CharacterDataWrapper {
  code?: number; // (int, optional): The HTTP status code of the returned result.,
  status?: string; // (string, optional): A string description of the call status.,
  copyright?: string; // (string, optional): The copyright notice for the returned result.,
  attributionText?: string; // (string, optional): The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.,
  attributionHTML?: string; // (string, optional): An HTML representation of the attribution notice for this result. Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.,
  data?: CharacterDataContainer; // (CharacterDataContainer, optional): The results returned by the call.,
  etag?: string; // (string, optional): A digest value of the content returned by the call.
}

export interface CharacterDataContainer {
  offset?: number; // (int, optional): The requested offset (number of skipped results) of the call.,
  limit?: number; // (int, optional): The requested result limit.,
  total?: number; // (int, optional): The total number of resources available given the current filter set.,
  count?: number; // (int, optional): The total number of results returned by this call.,
  results?: Array<Character>; // (Array[Character], optional): The list of characters returned by the call.
}

export interface Character {
  id?: number; // (int, optional): The unique ID of the character resource.,
  name?: string; // (string, optional): The name of the character.,
  description?: string; // (string, optional): A short bio or description of the character.,
  modified?: string | Date; // (Date, optional): The date the resource was most recently modified.,
  resourceURI?: string; // (string, optional): The canonical URL identifier for this resource.,
  urls?: Array<Url>; // (Array[Url], optional): A set of public web site URLs for the resource.,
  thumbnail?: Image; // (Image, optional): The representative image for this character.,
  comics?: ComicList; // (ComicList, optional): A resource list containing comics which feature this character.,
  stories?: StoryList; // (StoryList, optional): A resource list of stories in which this character appears.,
  events?: EventList; // (EventList, optional): A resource list of events in which this character appears.,
  series?: SeriesList; // (SeriesList, optional): A resource list of series in which this character appears.
}

export interface Url {
  type?: string; // (string, optional): A text identifier for the URL.,
  url?: string; // (string, optional): A full URL (including scheme, domain, and path).
}

export interface Image {
  path?: string; //(string, optional): The directory path of to the image.,
  extension?: string; //(string, optional): The file extension for the image.
}

export interface ComicList {
  available?: number; // (int, optional): The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; // (int, optional): The number of issues returned in this collection (up to 20).,
  collectionURI?: string; // (string, optional): The path to the full list of issues in this collection.,
  items?: Array<ComicSummary>; // (Array[ComicSummary], optional): The list of returned issues in this collection.
}

export interface ComicSummary {
  resourceURI?: string; //  (string, optional): The path to the individual comic resource.,
  name?: string; //  (string, optional): The canonical name of the comic.
}

export interface StoryList {
  available?: number; //  (int, optional): The number of total available stories in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; //  (int, optional): The number of stories returned in this collection (up to 20).,
  collectionURI?: string; //  (string, optional): The path to the full list of stories in this collection.,
  items?: Array<StorySummary>; //  (Array[StorySummary], optional): The list of returned stories in this collection.
}

export interface StorySummary {
  resourceURI?: string; //  (string, optional): The path to the individual story resource.,
  name?: string; //  (string, optional): The canonical name of the story.,
  type?: string; //  (string, optional): The type of the story (interior or cover).
}

export interface EventList {
  available?: number; //  (int, optional): The number of total available events in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; //  (int, optional): The number of events returned in this collection (up to 20).,
  collectionURI?: string; //  (string, optional): The path to the full list of events in this collection.,
  items?: Array<EventSummary>; //  (Array[EventSummary], optional): The list of returned events in this collection.
}

export interface EventSummary {
  resourceURI?: string; //  (string, optional): The path to the individual event resource.,
  name?: string; //  (string, optional): The name of the event.
}

export interface SeriesList {
  available?: number; //  (int, optional): The number of total available series in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; //  (int, optional): The number of series returned in this collection (up to 20).,
  collectionURI?: string; //  (string, optional): The path to the full list of series in this collection.,
  items?: Array<SeriesSummary>; //  (Array[SeriesSummary], optional): The list of returned series in this collection.
}

export interface SeriesSummary {
  resourceURI?: string; //  (string, optional): The path to the individual series resource.,
  name?: string; //  (string, optional): The canonical name of the series.
}

export default axiosGet;
