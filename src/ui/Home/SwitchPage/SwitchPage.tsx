import styles from './Switch.module.css';
import leftBtn from './left-chevron.svg';
import rightBtn from './right-chevron.svg';
import { useEffect } from 'react';

const SwitchPage = ({ pages, selectedPage, allMovies, setSelectedPage, setFilteredMovies, setShowNoMoviesFound }) => {

  const startIndex = 10;
  const endIndex = startIndex + 10;

  const prevStartIndex = startIndex - 10;
  const prevEndIndex = endIndex - 10;

  const handleNextPageBtn = () => {
    if(selectedPage <= 3) {
        setFilteredMovies(allMovies.entries.slice(startIndex, endIndex));
        setSelectedPage(selectedPage + 1);
    } else {
        console.log('Do nofting')
    }
  };

  console.log(endIndex);
  console.log(allMovies);

  


  const handlePrevPageBtn = () => {
    if(selectedPage >= 2) {
        setFilteredMovies(allMovies.entries.slice(prevStartIndex, prevEndIndex));
        setSelectedPage(selectedPage - 1);
    } else {
        console.log('Do nofting')
    }
  };

  useEffect(() => {
    if(selectedPage == 1) {
        setFilteredMovies(allMovies.entries.slice(0, 10));
        setShowNoMoviesFound(false);
    }
    if(selectedPage == 2) {
        setFilteredMovies(allMovies.entries.slice(10, 20));
        setShowNoMoviesFound(false);
    }
    if(selectedPage == 3) {
        setFilteredMovies(allMovies.entries.slice(20, 30));
        setShowNoMoviesFound(false);
    }
    if(selectedPage >= 4) {
        setShowNoMoviesFound(true);
    }
  }, [selectedPage])
  

  return (
    <div className={styles.switchContainer}>
        <button onClick={handlePrevPageBtn} className={styles.pageBtn}>
            <img 
                className={styles.leftBtn}
                src={leftBtn} 
                alt="Left Button Icon" 
            />
        </button>
        <ul className={styles.pagesContainer}>
            {pages.map((number: number, index: number) => (
                <li
                    className={styles.pageOption} 
                    style={selectedPage == index + 1 ? {backgroundColor: "red"} : {color: "inherit"}}
                    onClick={() => setSelectedPage(index + 1)}>
                        {number}
                </li>
            ))}
        </ul>
        <button onClick={handleNextPageBtn} className={styles.pageBtn}>
            <img 
                className={styles.rightBtn}
                src={rightBtn} 
                alt="Right Button Icon" 
            />
        </button>
    </div>
  )
};

export default SwitchPage;