import React from 'react'
import styles from './FavoritesList.module.scss'
import FavoriteItem from '../FavoritesMoviesCard/FavoriteItem'
import FavoritesSerialsItem from '../FavoritesSerials/FavoritesSerialsItem'
import { useSelector } from 'react-redux'

const FavoritesList = (props) => {
  const { favoritesMovies } = useSelector(state => state.moviesList)
  const { favoritesSerials } = useSelector(state => state.serialsList)

  return (<div className={styles.favoritesList}>
      {favoritesMovies.length > 0 && (
        <h1 className={styles.title}>Фильмы</h1>
      )
      }
      <div className={styles.movies}>
        <FavoriteItem/>
      </div>
      {favoritesSerials.length > 0 && (
        <h1 className={styles.title}>Сериалы</h1>
      )
      }
      <div className={styles.serials}>
        <FavoritesSerialsItem/>
      </div>
    </div>
  )
}

export default FavoritesList