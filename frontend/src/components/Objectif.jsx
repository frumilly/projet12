// Objectif.jsx
import React, { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar } from 'recharts';
import styles from './Objectif.module.css';

const Objectif = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const score = data * 100;

  const radialBarData = [
    { value: 100 }, // Fond blanc
    { value: score, fill: 'red' }, // Partie rouge
  ];

  useEffect(() => {
    // Simulez un délai de chargement (vous pouvez remplacer cela par votre logique de chargement réelle)
    setTimeout(() => {
      setLoaded(true);
    }, 1000); // 1000 ms (1 seconde)
  }, []);

  return (
    <div className={styles.objectifContainer}>
      {loaded && (
        <>
          <RadialBarChart
            width={300}
            height={300}
            cx={150}
            cy={150}
            innerRadius={80}
            outerRadius={140}
            barSize={20}
            data={radialBarData}
            startAngle={90} // Inverse la direction
          >
            <RadialBar dataKey="value" fill="#FFF" background={false} />
          </RadialBarChart>

          <div className={styles.title}>Score</div>
          <div className={styles.percentageContainer}>
            <div className={styles.percentage}>{score}%</div>
            <div className={styles.goalText}>de votre objectif</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Objectif;
