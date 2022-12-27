import styles from "../styles/Home.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  return (
    <div className={styles.grid}>
      <Link
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
      </Link>

      <Link
        href="/link/github"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          GitHub <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Check out our GitHub page for all of our projects&apos; source code!
        </p>
      </Link>

      <Link
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
      </Link>

      <Link
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
      </Link>
    </div>
  );
}