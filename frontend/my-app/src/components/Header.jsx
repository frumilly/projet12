// Header.jsx
import React from 'react';
import styles from './Header.module.css'; // Importez les styles du module CSS

function Header() {
  return (
    <div className={styles.header}>
      <div className={`${styles.rectangle} ${styles.vertical}`}>
        {/* Contenu du rectangle vertical */}
      </div>
      <div className={`${styles.rectangle} ${styles.horizontal}`}>
        {/* Logo et liens de navigation */}
      </div>
    </div>
  );
}

export default Header;
