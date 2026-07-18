import { useAppDispatch, useAppSelector } from '../../app/hooks'
import type { RootState } from '../../app/store'
import { toggleFavorite } from '../../features/favorite/favoritesSlice'
import type { Movie } from '../../types/tmdb'

interface FavoriteButtonProps {
  movie: Movie
  className?: string
}

export function FavoriteButton({ movie, className = '' }: FavoriteButtonProps) {
  const dispatch = useAppDispatch()
  const isFavorite = useAppSelector((state: RootState) =>
    state.favorites.items.some((m: Movie) => m.id === movie.id)
  )

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(toggleFavorite(movie))
      }}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      className={`${className} ${
        isFavorite ? 'text-red-500' : 'text-gray-400 dark:text-white'
      } transition-all duration-200 ease-out hover:scale-125 active:scale-90 ${
        isFavorite ? 'animate-[pop_0.3s_ease-out]' : ''
      }`}
    >
      {isFavorite ? '♥' : '♡'}
    </button>
  )
}