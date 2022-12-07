import styles from './Header.module.css';
import logo from './logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Hero Banner logo" />
        </header>
    )
};
