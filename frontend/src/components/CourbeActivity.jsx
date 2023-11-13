// CourbeActivity.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CourbeActivity = ({ data }) => {
  // Créer un tableau de données avec des valeurs de 1 à 10 pour l'axe X
  const xAxisData = Array.from({ length: 10 }, (_, index) => index + 1);

  // Inverser l'ordre des données
  const reversedData = [...data].reverse();

  return (
    <BarChart width={800} height={400} data={reversedData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="value" tickValues={xAxisData} />
      <YAxis yAxisId="left" orientation="left" label={{ value: '', angle: -90, position: 'insideRight' }} 
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 0 }}
      />
      <YAxis yAxisId="right" orientation="right" label={{ value: '', angle: -90, position: 'insideLeft' }} domain={[69, 71]} />
      <Tooltip />
      <Legend />
      <Bar yAxisId="right" dataKey="kilogram" fill="#000000" name="Poids (kg)" barSize={5} />
      <Bar yAxisId="left" dataKey="calories" fill="#FF0000" name="Calories brulées (KCal)" barSize={5} />
     
    </BarChart>
  );
};

export default CourbeActivity;
