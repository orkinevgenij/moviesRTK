import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

const Layout = (props) => {
  return (<div className="wrapper">
      <div className="content">
        <Header/>
        <main className={styles.main}>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout