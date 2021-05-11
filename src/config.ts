export const config = {
  marvelApi: {
    baseUrl: 'https://gateway.marvel.com/v1/public',
    privateKey: process.env.REACT_APP_MARVEL_API_PRIVATE_KEY || '',
    publicKey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY || ''
  }
}