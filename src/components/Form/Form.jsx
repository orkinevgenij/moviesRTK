import React from 'react'
import styles from './Form.module.scss'
import { Link, Route, Routes, Outlet, NavLink } from 'react-router-dom'

const Form = () => {

  return (<div className={styles.form}>
      <div className={styles.nav}>
        <NavLink className={styles.navItem} to="/form">Логин</NavLink>
        <NavLink className={styles.navItem} to="registration">Регистрация</NavLink>
      </div>
      <div className={styles.info}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Form