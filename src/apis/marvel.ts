import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
// import axiosGet from "apis/axios";

export const getCharacters = () => {
  const url = 'https://gateway.marvel.com/v1/public/characters';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json;charset=UTF-8'
  //   },
  //   body: JSON.stringify({
  //     a: 10,
  //     b: 20
  //   })
  // };

  // fetch(url, options)
  //   .then(response => {
  //     console.log(response.status);
  //   });

  return axios.get(url, {
    params: {
      test: 123
    }
  })
}