import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#FF0000', padding: '10px', borderRadius: '5px', color: '#FFFFFF' }}>
        <p>{`${payload[0].payload.kilogram} kg`}</p>
        <p>{`${payload[0].payload.calories} KCal`}</p>
      </div>
    );
  }

  return null;
};

const CourbeActivity = ({ data }) => {
  const xAxisData = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <BarChart width={800} height={400} data={data} margin={{ top: 30, right: 30, left: 20, bottom: 10 }}>
      <text x="10" y="30" dy={-10} fontSize={16} fontWeight="bold" fill="#000000">Activité quotidienne</text>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="value" domain={[1, 10]} tickValues={xAxisData} />
      <YAxis yAxisId="left" orientation="left" label={{ value: '', angle: -90, position: 'insideRight' }} 
        axisLine={false}
        tickLine={false}
        tick={{ fontSize: 0 }}
      />
      <YAxis yAxisId="right" orientation="right" label={{ value: '', angle: -90, position: 'insideLeft' }} domain={[68, 82]} />
      <Tooltip content={<CustomTooltip />} />
      <Legend align="right" verticalAlign="top" iconType="circle" wrapperStyle={{ lineHeight: '10px', marginTop: '-20px' }} />
      <Bar yAxisId="right" dataKey="kilogram" fill="#000000" name="Poids (kg)" barSize={5} />
      <Bar yAxisId="left" dataKey="calories" fill="#FF0000" name="Calories brulées (KCal)" barSize={5} />
    </BarChart>
  );
};

export default CourbeActivity;
