import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_PATH } from '../../api/api'
import styles from './FavoriteItem.module.scss'
import { delFavoritesMovies } from '../../redux/slice/moviesSlice'

const FavoriteItem = (props) => {
  const favoritesMovies = useSelector(state => state.moviesList.favoritesMovies)
const dispatch = useDispatch()
  const removeMovie = (id)=>{
    dispatch(delFavoritesMovies(id))
  }

  return (<>
      {
        favoritesMovies.map((movie) =>
          (<div className={styles.card} key={movie.id}>
              <div className={styles.poster}>
                <img src={IMG_PATH + movie.poster_path} alt=""/>
              </div>
              <p className={styles.title}>{movie.title}</p>
              <p className={styles.average}>{movie.vote_average}</p>
              <button className={styles.buttonDel} onClick={()=>removeMovie(movie.id)}>Удалить</button>
            </div>
          )
        )
      }
    </>
  )
}

export default FavoriteItem