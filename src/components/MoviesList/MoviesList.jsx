import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../redux/slice/moviesSlice'
import styles from './MoviesList.module.scss'
import MovieItem from '../MoviesCard/MovieItem'

const MoviesList = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  return (<>
      <h1 className={styles.title}>Фильмы</h1>
      <div className={styles.moviesList}>
        <MovieItem/>
      </div>
    </>
  )
}

export default MoviesList