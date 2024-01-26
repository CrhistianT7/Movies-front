import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IMovie } from '../../types/types'
import { getMovies } from '../../services/api-fetch'

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Array<IMovie>>([])

  const fetchData = useCallback(async () => {
    const { data } = await getMovies()
    setMovies(data)
  }, [])

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.error
    }
  }, [fetchData])

  return (
    <div>
      <h2>Find a movie to watch tonight</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie.id}>
                <td>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td>{movie.release_date}</td>
                <td>{movie.mpaa_rating}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Movies
