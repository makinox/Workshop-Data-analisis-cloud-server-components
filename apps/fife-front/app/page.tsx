import { AppBar } from '@/components/AppBar';
import { readDocument } from '@/utils';

import styles from './page.module.css';

const Home = async () => {
  const { tableHeaders, teamsData } = await readDocument();

  return (
    <main className={styles.main}>
      <AppBar tableHeaders={tableHeaders} teamsData={teamsData} />
    </main>
  );
};

export default Home;
