// Header.jsx
import React from 'react';
import styles from './Header.module.css';
import Icons from './Icons';

function Header() {
  return (
    <div className={styles.header}>
      <div className={`${styles.rectangle} ${styles.vertical}`}>
        <div className={styles.logo}></div> 
        <ul className={styles.menu}>
          <li>
            <a href="/" className={styles.menuLink}>Accueil</a>
          </li>
          <li>
            <a href="/" className={styles.menuLink}>Profil</a>
          </li>
          <li>
            <a href="lien_vers_reglage" className={styles.menuLink}>Réglage</a>
          </li>
          <li>
            <a href="lien_vers_communaute" className={styles.menuLink}>Communauté</a>
          </li>
        </ul>
        <Icons />
      </div>

      
      <div className={styles.horizontal}>
        {/* Autres éléments horizontaux du header */}
        
      </div>
      
      <div className={styles.copiryght}> Copiryght, SportSee 2020 </div>
    </div>
  );
}

export default Header;
