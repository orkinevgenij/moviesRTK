import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_PATH } from '../../api/api'
import styles from './AnticipatedItem.module.scss'

const AnticipatedItem = (props) => {
  const upcomingMovies = useSelector(state => state.anticipatedMoviesList.movies)
  return (<>
      {upcomingMovies.map((movie) => (
        <div className={styles.card} key={movie.id}>
          <div className={styles.poster}>
            <img src={IMG_PATH + movie.poster_path} alt=""/>
          </div>
          <span className={styles.title}>{movie.title}</span>
          <p className={styles.moviesDate}>{movie.release_date}</p>
        </div>
      ))}
    </>
  )
}

export default AnticipatedItem