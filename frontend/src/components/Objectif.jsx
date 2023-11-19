import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import styles from './Objectif.module.css';

const Objectif = ({ data }) => {
  const score = data[0].score; // Assurez-vous que votre structure de données est correcte

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="#000" textAnchor="middle" dominantBaseline="central" fontSize={20}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className={styles.chartContainer}>
      <RadialBarChart
        width={300}
        height={300}
        cx={150}
        cy={150}
        innerRadius={80}
        outerRadius={140}
        barSize={20}
        data={data}
      >
        <RadialBar
          background
          dataKey="value"
          fill="#ddd" // Couleur de fond du cercle
        />
        <RadialBar
          dataKey="value"
          fill="#FF0000" // Couleur de la partie rouge du cercle
          label={renderCustomizedLabel}
        />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
        <Tooltip />
      </RadialBarChart>
      <div className={styles.title}>{score}% de votre objectif</div>
    </div>
  );
};

export default Objectif;
