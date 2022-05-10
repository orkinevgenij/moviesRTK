import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedUpcomingMovies } from '../../redux/slice/AnticipatedMoviesSlice'
import AnticipatedItem from '../AnticipatedCard/AnticipatedItem'
import styles from './Homepage.module.scss'
import Spinner from 'react-bootstrap/Spinner'

const Home = () => {
  const status = useSelector(state => state.anticipatedMoviesList.status)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchedUpcomingMovies())
  }, [])

  if (status === 'Pending') return <div className={styles.spinner}><Spinner animation="border" variant="danger"/></div>

  return (<>
      <h1 className={styles.title}>Скоро</h1>
      <div className={styles.moviesList}>
        <AnticipatedItem/>
      </div>
    </>
  )
}

export default Home