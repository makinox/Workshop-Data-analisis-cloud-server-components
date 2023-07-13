'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { teamData } from '@/utils';

interface IAppBar {
  tableHeaders: Array<string>;
  teamsData: Array<teamData>;
}

export const AppBar = ({ tableHeaders, teamsData }: IAppBar) => {
  const tableData = tableHeaders.slice(1).map((header, index) => {
    return {
      name: header,
      nombre: teamsData[0].partido1,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={tableData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
