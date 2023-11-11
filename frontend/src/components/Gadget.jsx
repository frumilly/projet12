import React from 'react';
import styles from './Gadget.module.css';


export function Gadget({ imageSrc, measure, unit }) {
  const gadgetStyle = {
    backgroundImage: `url(${imageSrc})` ,
    backgroundSize: 'cover',
    width: '90px',
    height: '90px',
    
  };

  return (
    <div className={styles.gadgetItem}>
      <div className={styles.gadgetStyle} style={gadgetStyle}></div>
      <div className={styles.measureUnitContainer}>
        <p className={styles.measure}>{measure}</p>
        <p className={styles.unit}>{unit}</p>
      </div>
    </div>
  );
}

  export default Gadget;