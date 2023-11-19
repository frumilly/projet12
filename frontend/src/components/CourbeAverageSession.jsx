// CourbeAverageSession.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import styles from './CourbeAverageSession.module.css'; // Import fichier CSS avec les styles

const CourbeAverageSession = ({ data }) => {
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: '#FFF', padding: '10px', borderRadius: '5px', color: 'black' }}>
           <p className={styles.tooltipContent}>{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div className={styles.chartContainer}>
      
      <LineChart width={280} height={300} data={data} margin={{ top: 0, right: 0, left: -40, bottom: 0 }} viewBox="0 200 200 400">
      <text x="10" y="30" dy={-10} fontSize={16}  fill="#fff">Durée moyenne des sessions</text>
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
        <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#fff' }} tickFormatter={(value) => daysOfWeek[value - 1]} />
        <YAxis orientation="left" label={{ value: '', angle: -90, position: 'insideRight' }} axisLine={false} tickLine={false} tick={{ fontSize: 0 }} />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#fff', strokeWidth: 0}} />

        {/* Courbe */}
        <Line type="monotone" dataKey="sessionLength" stroke="#fff" name="Durée moyenne des sessions" dot={false} />


      </LineChart>
    </div>
  );
};

export default CourbeAverageSession;
