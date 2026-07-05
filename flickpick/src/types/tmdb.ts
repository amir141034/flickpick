export interface Movie {
  id: number
  title: string
  poster_path: string | null
  overview: string
  vote_average: number
  release_date: string
  genre_ids: number[]
}

export interface TMDBResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}