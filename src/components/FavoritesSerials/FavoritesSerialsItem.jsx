import React from 'react'
import { IMG_PATH } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import styles from './FavoritesSerialsItem.module.scss'
import { delFavoritesSerial } from '../../redux/slice/serialsSlice'

const FavoritesSerialsItem = (props) => {
  const favoritesMovies = useSelector(state => state.serialsList.favoritesSerials)
  const dispatch = useDispatch()

  const removeSerial = (id) => {
    dispatch(delFavoritesSerial(id))
  }

  return (<>
      {favoritesMovies.map((serial) => (
        <div className={styles.serialCard} key={serial.id}>
          <div className={styles.serialPoster}>
            <img src={IMG_PATH + serial.poster_path} alt=" отсутствует"/>
          </div>
          <p className={styles.serialTitle}>{serial.name}</p>
          <p className={styles.average}>{serial.vote_average}</p>
          <button className={styles.buttonDel} onClick={() => removeSerial(serial.id)}>Удалить</button>
        </div>
      ))}
    </>
  )
}

export default FavoritesSerialsItem