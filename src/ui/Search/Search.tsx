import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import search from './search.svg'


const Search = ({ allMovies, filteredMovies, setFilteredMovies}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const movies = allMovies.entries;

  useEffect(() => {
    if(searchTerm == '' || false || undefined || null) {
      setFilteredMovies(movies.slice(0, 10));
    }
  }, [searchTerm])
  
  return (
    <div>

      <div className={styles.searchContainer}>
        <div className={styles.search}>
            <input
              type="text" 
              placeholder="Title"
              className={styles.searchInput} 
              onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if(searchTerm.length > 0) {
                    setFilteredMovies(movies.filter((movie: any) => {
                      if(searchTerm == "") {
                        return
                      } else if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return movie
                      }
                    }
                  ));
                }
              }
              } 
            />
            <img 
                className={styles.searchIcon}
                src={search} 
                alt="Search Icon" 
            />
        </div>
      </div>
    </div>
  )
};

export default Search;