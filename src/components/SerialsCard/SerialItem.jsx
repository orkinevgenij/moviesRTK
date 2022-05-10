import React from 'react'
import styles from './SerialItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_PATH } from '../../api/api'
import { FaRegHeart } from 'react-icons/fa'
import { addFavoritesSerials } from '../../redux/slice/serialsSlice'
import { NavLink } from 'react-router-dom'

const SerialItem = (props) => {
  const serials = useSelector(state => state.serialsList.serials)
  const dispatch = useDispatch()

  const addFavorites = (id) => {
    dispatch(addFavoritesSerials(id))
  }

  return (<>
      {serials.map((serial) => (
        <div className={styles.serialCard} key={serial.id}>
          <div className={styles.serialPoster}>
            <img src={IMG_PATH + serial.poster_path} alt="изображение отсутствует"/>
          </div>
          <p className={styles.title}>{serial.name}</p>
          <p className={styles.average}>{serial.vote_average}</p>
          <FaRegHeart size="2em" className={styles.favoritesButton} onClick={() => addFavorites(serial.id)}/>
          <NavLink to={`/serials/${serial.id}`}>
            <button className={styles.buttonDetail}>Подробнее</button>
          </NavLink>
        </div>
      ))}
    </>
  )
}

export default SerialItem