import { useParams } from 'react-router-dom'
import { IMovie } from '../../types/types'
import { useEffect, useState } from 'react'

const MovieCard: React.FC = () => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie)
  const { id } = useParams()

  useEffect(() => {
    const myMovie = {
      id: 1,
      title: 'Highlinder',
      release_date: '1986-03-07',
      runtime: 116,
      mppa_rating: 'R',
      description: 'Some long description',
    }
    setMovie(myMovie)
  }, [id])

  return (
    <div>
      <h2>Movie: {movie.title}</h2>
      <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mppa_rating}</em></small>
      <hr />
      <p>
        {movie.description}
      </p>
    </div>
  )
}

export default MovieCard
