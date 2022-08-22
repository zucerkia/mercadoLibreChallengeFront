import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Assets
import searchIcon from '../../../assets/search-icon.png'

// Styles
import styles from './search.module.scss'

const Search = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (search) {
      navigate(`items?q=${search}`)
    }
  }
  return (
    <form className={styles.searchBox} onSubmit={handleSubmit}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        value={search}
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
