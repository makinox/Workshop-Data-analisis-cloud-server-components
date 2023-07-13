'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { teamData } from '@/utils';

const formatTeamName = (teamName: string) => `Equipo ${teamName}`;

interface IAppBar {
  tableHeaders: Array<string>;
  teamsData: Array<teamData>;
}

export const AppBar = ({ tableHeaders, teamsData }: IAppBar) => {
  const teamParseValues = teamsData.map((team) => {
    const teamName = team.equipo;
    const values = Object.values(team).slice(1);

    return { teamName, values };
  });

  const tableData = tableHeaders.slice(1).map((header, index) => ({
    name: header,
    [formatTeamName(teamParseValues[0].teamName)]: teamParseValues[0].values[index],
    [formatTeamName(teamParseValues[1].teamName)]: teamParseValues[1].values[index],
    [formatTeamName(teamParseValues[2].teamName)]: teamParseValues[2].values[index],
  }));

  return (
    <section style={{ width: '800px', height: '800px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={800}
          height={500}
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
          <Bar dataKey={formatTeamName(teamParseValues[0].teamName)} fill="#8884d8" />
          <Bar dataKey={formatTeamName(teamParseValues[1].teamName)} fill="#82ca9d" />
          <Bar dataKey={formatTeamName(teamParseValues[2].teamName)} fill="#db4747" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};
