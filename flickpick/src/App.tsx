import { Routes, Route } from 'react-router-dom'
import { BrowsePage } from './components/BrowsePage'
import { MovieDetailPage } from './components/MovieDetailPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Routes>
        <Route path="/" element={<BrowsePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  )
}

export default App