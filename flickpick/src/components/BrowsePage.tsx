import { useState } from 'react'
import { useDebounce } from '../composables/useDebounce'
import { GenreSelector } from './GenreSelector'
import { MovieGrid } from './MovieGrid'
import { SearchBar } from '../components/SearchBar'
import { SearchResults } from '../components/SearchResults'

export function BrowsePage() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null)
  const [searchInput, setSearchInput] = useState('')
  const debouncedSearch = useDebounce(searchInput, 400)

  const isSearching = debouncedSearch.trim().length > 0

  return (
    <div>
      <SearchBar value={searchInput} onChange={setSearchInput} />

      {isSearching ? (
        <SearchResults query={debouncedSearch} />
      ) : (
        <>
          <GenreSelector selectedGenre={selectedGenre} onSelect={setSelectedGenre} />
          <MovieGrid genreId={selectedGenre} />
        </>
      )}
    </div>
  )
}