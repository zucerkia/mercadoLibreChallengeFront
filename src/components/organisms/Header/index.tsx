import React from 'react'

import logoML from '../../../assets/logo.png'
import Search from '../../molecules/Search'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`grid-layout ${styles.header__container}`}>
        <a className={styles.header__logo} href="/">
          <img src={logoML} alt="Mercado libre Logo" />
        </a>
        <Search />
      </nav>
    </header>
  )
}

export default Header
