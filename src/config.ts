console.log('process.env', process.env)
export const config = {
  marvelApi: {
    url: '',
    privateKey: process.env.MARVEL_API_PRIVATE_KEY || '',
    publicKey: process.env.MARVEL_API_PUBLIC_KEY || ''
  }
}