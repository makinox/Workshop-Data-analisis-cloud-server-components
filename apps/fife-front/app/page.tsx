import { readDocument } from '@/utils';

import styles from './page.module.css';

const Home = async () => {
  const teamsData = await readDocument();
  console.log({ teamsData });

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Hola mundo</h2>
      </div>
    </main>
  );
};

export default Home;
