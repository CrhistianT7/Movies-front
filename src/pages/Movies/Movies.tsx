import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IMovie } from '../../types/types'

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Array<IMovie>>([])

  useEffect(() => {
    let movieList: Array<IMovie> = [
      {
        id: 1,
        title: 'Highlinder',
        release_date: '1986-03-07',
        runtime: 116,
        mppa_rating: 'R',
        description: 'Some long description',
      },
      {
        id: 2,
        title: 'Raiders of the Lost Ark',
        release_date: '1981-06-12',
        runtime: 115,
        mppa_rating: 'PG-13',
        description: 'Some long description',
      },
    ]
    setMovies(movieList)
  }, [])
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
                <td>{movie.mppa_rating}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Movies
