import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../../api/api_key'
import styles from './SerialDetails.module.scss'
import { IMG_PATH } from '../../api/api'

const SerialDetails = (props) => {
  const { id } = useParams()

  const [details, setDetails] = useState(null)

  console.log(details)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=eu-US`)
      .then(response => response.json())
      .then(data => setDetails(data))
  }, [id])

  return (<div>
      {
        details && (
          <div className={styles.detailsCard}>
            <div className={styles.poster}>
              <img src={IMG_PATH + details.poster_path} alt=""/>
            </div>
            <div className={styles.info}>
              <h1 className={styles.title}>{details.title}</h1>
              <p className={styles.overview}>{details.overview}</p>
              <div className={styles.date}> Дата релиза: <p>{details.first_air_date}</p>
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

export default SerialDetails