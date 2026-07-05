import { useState } from 'react'
import { GenreSelector } from './components/GenreSelector'
import { MovieGrid } from './components/MovieGrid'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-900">
      <GenreSelector selectedGenre={selectedGenre} onSelect={setSelectedGenre} />
      <MovieGrid genreId={selectedGenre} />
    </div>
  )
}

export default App