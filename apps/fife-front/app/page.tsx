import { readDocument } from '@/utils';

import styles from './page.module.css';

const Home = async () => {
  const { tableHeaders, teamsData } = await readDocument();

  console.log({ teamsData });

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teamsData.map((data) => (
              <tr>
                <td>{data.equipo}</td>
                <td>{data.partido1}</td>
                <td>{data.partido2}</td>
                <td>{data.partido3}</td>
                <td>{data.partido4}</td>
                <td>{data.partido5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Home;
