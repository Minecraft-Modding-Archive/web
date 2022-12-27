import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import jsonData from "../data/mods.json";
import { Inter } from '@next/font/google';
import { ReactElement } from 'react';
import Router from 'next/router';
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mods: ReactElement[] = []
  jsonData.forEach((v: any) => {
    mods.push(
      (
        <div onClick={(_) => Router.push(v.repoUrl)} key={v.id.toString()} className={styles.modContainer}>
          <Image className={styles.modContainerImage} alt="" src={v.iconUrl} width={0} height={0} />
          <div>
            <h1 className={inter.className}>{v.modName}</h1>
            <p className={inter.className}>{v.modDesc}</p>
          </div>
        </div>
      )
    );
  });

  if (jsonData.length === 0) {
    mods.push(
      <h1 key="-1" className={inter.className}>There aren't any mods available!</h1>
    );
  }

  return (
    <>
      <main className={styles.main}>
        <Header />

        <div className={styles.modGrid}>
          {mods}
        </div>

        <Footer />
      </main>
    </>
  );
}
