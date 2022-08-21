import React from 'react'

import searchIcon from '../../../assets/search-icon.png'

import styles from './search.module.scss'

const Search = () => {
  return (
    <form className={styles.searchBox}>
      <input
        className={styles.searchBox__input}
        type="text"
        placeholder="Nunca dejes de buscar"
      />
      <button className={styles.searchBox__icon}>
        <img src={searchIcon} alt="" />
      </button>
    </form>
  )
}

export default Search
