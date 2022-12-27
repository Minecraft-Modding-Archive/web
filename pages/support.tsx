import { Inter } from "@next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Support() {
  return (
    <>
      <main className={styles.main}>
        <Header />

        <h1 className={inter.className}>Coming soon!</h1>

        <Footer />
      </main>
    </>
  );
}
