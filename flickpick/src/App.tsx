import { Routes, Route, Link } from 'react-router-dom'
import { BrowsePage } from './components/BrowsePage'
import { MovieDetailPage } from './components/MovieDetailPage'
import { WatchlistPage } from './components/WatchListPage'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <nav className="flex justify-between items-center p-4 text-gray-900 dark:text-white">
        <Link to="/" className="font-bold text-lg">🎬 MovieDB</Link>
        <div className="flex items-center gap-4">
          <Link to="/watchlist" className="text-sm hover:underline">My Watchlist</Link>
          <ThemeToggle />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<BrowsePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </div>
  )
}

export default App