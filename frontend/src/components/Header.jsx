// Header.jsx
import React from 'react';
import styles from './Header.module.css'; // Importez les styles du module CSS





function Header() {
  return (
    <div className={styles.header}>
      <div className={`${styles.rectangle} ${styles.vertical}`}>
      <div className={styles.logo}></div> 
       {/* Menu */}
       <ul className={styles.menu}>
  <li>
    <a href="lien_vers_accueil" className={styles.menuLink}>Accueil</a>
  </li>
  <li>
    <a href="lien_vers_profil" className={styles.menuLink}>Profil</a>
  </li>
  <li>
    <a href="lien_vers_reglage" className={styles.menuLink}>Réglage</a>
  </li>
  <li>
    <a href="lien_vers_communaute" className={styles.menuLink}>Communauté</a>
  </li>
</ul>

<div className={styles.icons}>
<a href="lien_vers_page_yoga" className={styles.link}>
  <div className={styles.yoga}></div>
</a>

<a href="lien_vers_page_nage" className={styles.link}>
  <div className={styles.swimm}></div>
</a>

<a href="lien_vers_page_velo" className={styles.link}>
  <div className={styles.velo}></div>
</a>

<a href="lien_vers_page_musculation" className={styles.link}>
  <div className={styles.muscu}></div>
</a>

</div>


      </div>
      <div className={`${styles.rectangle} ${styles.horizontal}`}>

      </div>
    </div>
  );
}

export default Header;
