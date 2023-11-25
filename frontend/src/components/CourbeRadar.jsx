// RadarChartComponent.jsx
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import styles from './CourbeRadar.module.css'; 

const RadarChartComponent = ({ data, userId }) => {
  return (
    <div className={styles.chartContainer}>
      <RadarChart
        outerRadius={130}
        width={350}  
        height={310}  
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        viewBox="0 0 500 500"
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
       
        <Radar name={`User ${userId}`} dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

export default RadarChartComponent;
