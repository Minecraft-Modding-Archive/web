import styles from "../styles/Home.module.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  return (
    <div className={styles.grid}>
      <a
        href="/about"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          About <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Find out more about us!
        </p>
      </a>

      <a
        href="/link/github"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          GitHub <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Check out our GitHub page for all of our projects' source code!
        </p>
      </a>

      <a
        href="/link/discord"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Discord <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Join our Discord server!
        </p>
      </a>

      <a
        href="/support"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Support <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Donate and support our projects!
        </p>
      </a>
    </div>
  );
}