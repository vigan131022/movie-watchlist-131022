import { useState } from 'react'
import { movies as initialMovies } from '../utils/movies'

const emptyForm = { title: '', director: '', genre: '', watched: false }

function MoviesPage() {
  const [movies, setMovies] = useState(initialMovies)
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleAdd(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.director.trim()) {
      setError('Title and director are required.')
      return
    }
    setError('')
    const newMovie = { ...form, id: Date.now() }
    setMovies(prev => [...prev, newMovie])
    setForm(emptyForm)
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>

      <form onSubmit={handleAdd} className="mb-8 space-y-3 max-w-md">
        <h2 className="text-xl font-semibold text-gray-800">Add a Movie</h2>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border rounded px-3 py-2 text-sm"
        />
        <input
          name="director"
          value={form.director}
          onChange={handleChange}
          placeholder="Director"
          className="w-full border rounded px-3 py-2 text-sm"
        />
        <input
          name="genre"
          value={form.genre}
          onChange={handleChange}
          placeholder="Genre"
          className="w-full border rounded px-3 py-2 text-sm"
        />
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="watched"
            checked={form.watched}
            onChange={handleChange}
          />
          Watched
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
          Add Movie
        </button>
      </form>

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
