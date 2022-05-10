import React from 'react'
import styles from './MovieItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_PATH } from '../../api/api'
import { addFavoritesMovies } from '../../redux/slice/moviesSlice'
import { NavLink } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'

const MovieItem = () => {
  const { movies } = useSelector(state => state.moviesList)

  const dispatch = useDispatch()

  const addFavorites = (id) => {
    dispatch(addFavoritesMovies(id))
  }
  return (<>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.card}>
          <div className={styles.poster}>
            <img src={IMG_PATH + movie.poster_path} alt=""/>
          </div>
          <p className={styles.title}>{movie.title}</p>
          <p className={styles.average}>{movie.vote_average}</p>
          <FaRegHeart size="2em" className={styles.favoritesButton} onClick={() => addFavorites(movie.id)}/>
          <NavLink to={`/movies/${movie.id}`}>
            <button className={styles.buttonDetail}>Подробнее</button>
          </NavLink>
        </div>
      ))}

    </>
  )
}

export default MovieItem