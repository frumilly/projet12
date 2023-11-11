// Icons.jsx
import React from 'react';
import styles from './Header.module.css';

function Icon({ iconName, link }) {
  const iconStyle = styles[iconName];

  return (
    <a href={link} className={styles.link}>
      <div className={iconStyle}></div>
    </a>
  );
}
export default Icon;
