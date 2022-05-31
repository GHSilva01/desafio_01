import axios from 'axios'

export const apiMarvel = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
})

export const apikey = 'a1074ff52eb1ba0a5090facad59657da'
export const hash = '21b88af96f1d98b3bbb913c0ffb9950a'
