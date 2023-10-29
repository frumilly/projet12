import React from 'react';
import styles from "./Home.module.css";

function Home() {
  return (
    <div className="home">
      <p className={styles.congratulationsText}>Félicitation! Vous avez explosé vos objectifs hier</p>
    </div>
  );
}

export default Home;
