import { useState } from 'react'
import { movies as initialMovies } from '../utils/movies'

function MoviesPage() {
  const [movies, setMovies] = useState(initialMovies)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>
      <ul className="space-y-4">
        {movies.map(movie => (
          <li key={movie.id} className="border rounded p-4 bg-white shadow-sm">
            <p className="font-bold text-lg">{movie.title}</p>
            <p className="text-sm text-gray-600">Director: {movie.director}</p>
            <p className="text-sm text-gray-600">Genre: {movie.genre}</p>
            <p className="text-sm text-gray-600">
              Status: {movie.watched ? 'Watched' : 'Not watched'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesPage
