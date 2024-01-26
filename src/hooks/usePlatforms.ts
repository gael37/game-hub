import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import apiClient from "../services/api-client"
import { Genre } from "./useGenres"
import { FetchResponse } from "../services/api-client"

interface Platform {
  id: number,
  name: string,
  slug: string
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () =>
    apiClient
      .get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, // 24h
  // initialData: { count: genres.length, results: genres },
})

export default usePlatforms