// CourbeAverageSession.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from './CourbeAverageSession.module.css'; // Importez le fichier CSS avec les styles

const CourbeAverageSession = ({ data }) => {
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <div className={styles.chartContainer}>
      <LineChart width={300} height={300} data={data} margin={{ top: 30, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickFormatter={(value) => daysOfWeek[value - 1]} />
        <YAxis orientation="left" label={{ value: '', angle: -90, position: 'insideRight' }} axisLine={false} tickLine={false} tick={{ fontSize: 0 }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" name="Durée moyenne des sessions" />
      </LineChart>
    </div>
  );
};

export default CourbeAverageSession;
