import React from 'react'
import styles from './Footer.module.scss'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = (props) => {
  return (<div className={styles.footer}>
      <a href="https://www.instagram.com/"> <BsFacebook className={styles.icon} size="2em" color="white"/>
      </a>
      <a href="https://uk-ua.facebook.com"> <BsInstagram className={styles.icon} size="2em" color="white"/>
      </a>
      <a href="https://twitter.com/?lang=ru"> <AiFillTwitterCircle className={styles.icon} size="2em" color="white"/>
      </a>

    </div>
  )
}

export default Footer