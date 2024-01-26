import axios from 'axios'

export interface FetchResponse<T> {
  count: number,
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8cea2030323645e0bda06760d4d605c7',
  },
})