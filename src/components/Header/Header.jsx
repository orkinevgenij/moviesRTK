import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styles from './Header.module.scss'
import { FaRegUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { BsCheckLg } from 'react-icons/bs'

const Header = (props) => {
  const { favoritesMovies } = useSelector(state => state.moviesList)
  const { favoritesSerials } = useSelector(state => state.serialsList)

  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <h1 className={styles.title}> Movies App </h1>
        <NavLink to="form">
          <FaRegUser className={styles.iconReg}/>
        </NavLink>
      </div>
      <div className={styles.nav}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="movies">Фильмы</NavLink>
        <NavLink to="serials">Сериалы</NavLink>
        <NavLink to="favorites">
          Избранные
          {
            favoritesMovies.length > 0 || favoritesSerials.length > 0 ? <BsCheckLg className={styles.check} size="1em"/>
              : null
          }
        </NavLink>
      </div>

    </header>

  )
}

export default Header