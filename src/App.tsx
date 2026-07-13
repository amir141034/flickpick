import { Routes, Route, NavLink } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import { DarkModeToggle } from './components/common/DarkModeToggle'
import { ErrorPage } from './components/error/ErrorPage'
import Loading from './components/common/Loading'


import { Clapperboard } from "lucide-react";

function App() {
  const BrowsePage = lazy(() => import("./pages/BrowsePage").then(m => ({ default: m.BrowsePage })))
  const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage").then(m => ({ default: m.MovieDetailPage })))
  const WatchlistPage = lazy(() => import("./pages/WatchlistPage").then(m => ({ default: m.WatchlistPage })))
  // const MoodPage = lazy(() => import("./pages/MoodPage"))

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="flex justify-between items-center p-4 text-gray-900 dark:text-white">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <Clapperboard size={22} className="text-blue-600 dark:text-blue-400" />
          <span>FlickPick</span>
        </NavLink>
        <div className="flex items-center gap-4 text-sm">
          {/* <Link to="/moods" className="hover:underline">Moods</Link> */}
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
              }`
            }
          >
            My Watchlist
          </NavLink>
          <DarkModeToggle />
        </div>
      </nav>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<BrowsePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          {/* <Route path="/moods" element={<MoodPage />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App