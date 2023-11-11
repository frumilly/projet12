import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Home.module.css";

function Home() {
  return (
    <div className="home">
      <div className={styles.profileButtons}>
        <Link to="/profile/12" className={styles.profileButton}>Voir le profil de Karl</Link>
        <Link to="/profile/18" className={styles.profileButton}>Voir le profil de Cecilia</Link>
      </div>
    </div>
  );
}

export default Home;
