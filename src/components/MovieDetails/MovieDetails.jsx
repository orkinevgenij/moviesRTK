import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_PATH } from '../../api/api'
import styles from './MovieDetails.module.scss'

const MovieDetails = (props) => {
  const { id } = useParams()

  const [details, setDetails] = useState(null)

  console.log(details)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=798217157abc61f74773037ca7e661cc&language=ru`)
      .then(response => response.json())
      .then(data => setDetails(data))
  }, [id])

  return (<div className={styles.detailsList}>
      {
        details && (
          <div className={styles.detailsCard}>
            <div className={styles.poster}>
              <img src={IMG_PATH + details.poster_path} alt=""/>
            </div>
            <div className={styles.info}>
              <h1 className={styles.title}>{details.title}</h1>
              <p className={styles.overview}>{details.overview}</p>
              <div className={styles.date}> Дата релиза: <p>{details.release_date}</p>
              </div>
              <span className={styles.average}>{details.vote_average}</span>
              <p className={styles.homepage}> Домашняя страница:</p>
              <a href={details.homepage}>Перейти</a>
            </div>
          </div>

        )
      }
    </div>
  )
}

export default MovieDetails