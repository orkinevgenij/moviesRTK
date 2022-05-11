import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSerials } from '../../redux/slice/serialsSlice'
import SerialItem from '../SerialsCard/SerialItem'
import styles from './SerialsList.module.scss'

const SerialsList = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSerials())
  }, [])

  return (<>
      <h1 className={styles.title}>Сериалы</h1>
      <div className={styles.serialsList}>
        <SerialItem/>
      </div>
    </>
  )
}

export default SerialsList