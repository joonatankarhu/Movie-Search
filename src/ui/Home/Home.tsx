import { useState } from 'react';
import styles from './Home.module.css';

// Import Component
import Movie from './Movie/Movie';
import SwitchPage from './SwitchPage/SwitchPage';

export function Home({ allMovies, filteredMovies, setFilteredMovies}) {
    const [selectedPage, setSelectedPage] = useState(1);
    const [showNoMoviesFound, setShowNoMoviesFound] = useState(false);

    const descendingFilter = [...filteredMovies].sort((a, b) => b.releaseYear - a.releaseYear);


    const pages = [1, 2, 3, 4, 5];
    
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Popular Movies</h1>
            {showNoMoviesFound ? 
                <div className={styles.errorMessage}>
                    <h2>There are no more movies in the list</h2>
                </div>
            :
            <ul className={styles.movies}>
                {descendingFilter.map((movie: any, index: any) => (
                    <Movie key={index} movie={movie} />
                ))}
            </ul>

            }
            <SwitchPage 
                pages={pages} 
                selectedPage={selectedPage} 
                allMovies={allMovies}
                setSelectedPage={setSelectedPage}
                setFilteredMovies={setFilteredMovies}
                setShowNoMoviesFound={setShowNoMoviesFound}
            />
        </div>
    )
};
