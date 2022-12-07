import { useState } from 'react';
import styles from './Movie.module.css';

const Movie = ({ index, movie }: any) => {
    const [hover, setHover] = useState(false);

    const mouseOver = () => {
        setHover(true);
    };

    const mouseOut = () => {
        setHover(false);
    };

    return (
        <li 
            key={index} 
            className={styles.movie} 
            onMouseEnter={mouseOver} 
            onMouseLeave={mouseOut} 
        >
            <div className={styles.movieInfo}>
                <p className={styles.title}>
                    {movie.title}
                </p>
                {hover && (
                    <div className={styles.subInfo}>
                        <p className={styles.releaseYear}>
                            {movie.releaseYear}
                        </p>
                        <p className={styles.description}>
                            {movie.description}
                        </p>
                    </div>
                )}
            </div>
            <img src={movie.images.posterArt.url} alt="Movie" />
        </li>
    )
};

export default Movie;