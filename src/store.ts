import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface GameQuery {
  genreId?: number | null,
  platformId?: number | null,
  sortOrder?: string,
  searchText?: string
}

interface GameQueryStore {
  gameQuery: GameQuery,
  setSearchText: (searchText: string) => void,
  setGenreId: (genreId: number | null) => void,
  setPlatformId: (platformId: number | null) => void,
  setSortOrder: (sortOrder: string) => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}))

if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('store', useGameQueryStore)

export default useGameQueryStore