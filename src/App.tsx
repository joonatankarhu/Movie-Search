import { BrowserRouter as Router } from "react-router-dom";
import styles from './App.module.css';

// Import Components
import { Home } from "./ui/Home";
import { Header } from "./ui/Header";
import Search from "./ui/Search/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./ui/Footer/Footer";

function App() {
    const [allMovies, setAllMovies] = useState([]);
    const [foundData, setFoundData] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json',
            );
            setAllMovies(result.data);
            setFilteredMovies(result.data.entries.slice(0, 10));
            setFoundData(true);
        };
        fetchData();
    }, []);
    
    return (
        <Router>
            <div className={styles.App}>
                <Header/>
                <div>
                    {foundData ? 
                        <Search 
                            allMovies={allMovies}
                            filteredMovies={filteredMovies}
                            setFilteredMovies={setFilteredMovies}
                        />
                    : 
                        <></>
                    }
                </div>
                <div>
                    {foundData ? 
                        <Home 
                            allMovies={allMovies} filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} 
                        /> 
                    : 
                        <></>
                    }
                </div>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;
