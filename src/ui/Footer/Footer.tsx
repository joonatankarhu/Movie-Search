import styles from './Footer.module.css';
import logo from './logo.svg';
import appStore from './app_store.svg';
import googlePlay from './google_play.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.section}>
            <img src={logo} className={styles.logo} alt="Brand logo" />
        </div>
        <div className={styles.section}>
            <img src={appStore} className={styles.btn} alt="Button" />
            <img src={googlePlay} className={styles.btn} alt="Button" />
        </div>
        <div className={styles.section}>
            <p>@ Copyright 2022 Dreadful Tomatoes. All rights  reserved.</p>
        </div>
    </div>
  )
};

export default Footer;