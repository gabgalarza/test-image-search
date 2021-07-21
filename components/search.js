import { useCallback, useRef, useState } from 'react'
import Carousel from './carousel';
import auth from '../credentials/index.json';
import styles from './search.module.css'

const Search = () => {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const searchEndpoint = (searchQuery) => `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=10`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(
        searchEndpoint(query),
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: auth.apiKey
          }
        }
      )
        .then(res => res.json())
        .then(res => {
          setResults(res.photos)
        })
    } else {
      setResults([])
    }
  }, [])

  return (
    <div
      className={styles.container}
      ref={searchRef}
    >
      <input
        className={styles.search}
        onChange={onChange}
        placeholder='Search images'
        type='text'
        value={query}
      />
      {results.length > 0 && (
        <Carousel images={results} />
      )}
    </div>
  )
}

export default Search;