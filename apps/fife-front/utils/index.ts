import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

type teamData = {
  equipo: string;
  partido1: number;
  partido2: number;
  partido3: number;
  partido4: number;
  partido5: number;
};

export const readDocument = async () => {
  const authData = {
    email: process.env.CLIENT_EMAIL,
    key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  };
  const defaultIndex = 0;

  const authToken = new JWT(authData);
  const sheetDocument = new GoogleSpreadsheet(process.env.SPREADSHEET_ID as string, authToken);
  await sheetDocument.loadInfo();

  const sheet = sheetDocument.sheetsByIndex[defaultIndex];
  await sheet.loadHeaderRow();

  const tableHeaders = sheet.headerValues; // Equipo, partido 1, partido 2, partido 3, partido 4, partido 5
  const sheetRows = await sheet.getRows({ limit: sheet.rowCount, offset: 0 });

  const teamsData = sheetRows.map((rows) => {
    const rowData = {
      equipo: rows.get(tableHeaders[0]),
      partido1: rows.get(tableHeaders[1]),
      partido2: rows.get(tableHeaders[2]),
      partido3: rows.get(tableHeaders[3]),
      partido4: rows.get(tableHeaders[4]),
      partido5: rows.get(tableHeaders[5]),
    };

    return rowData as teamData;
  });

  return { teamsData, tableHeaders };
};
