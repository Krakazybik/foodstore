import type { NextPage } from 'next';
import styles from '@styles/Home.module.scss';
import Button from '../shared/ui/button';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button>Sing in</Button>
    </div>
  );
};

export default Home;
