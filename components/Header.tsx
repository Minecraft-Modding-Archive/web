import { IsAdmin, IsLoggedIn } from "../lib/utils";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const loggedIn = IsLoggedIn();
  const isAdmin = IsAdmin();
  
  return (
    <div className={styles.description}>
      <div className={styles.navbuttons}>
        <Link href="/about">
          <p>About Us</p>
        </Link>
        <Link href="/link/github">
          <p>Our GitHub</p>
        </Link>
        <Link href="/link/discord">
          <p>Our Discord</p>
        </Link>
        <Link href="/support">
          <p>Support Us</p>
        </Link>
        {
          isAdmin ?
          <Link href="/addmod">
            <p style={{ fontWeight: "bold" }}>
              Add Mod
            </p>
          </Link>
          : !loggedIn ?
            <button onClick={() => signIn()}>
              <p style={{ fontWeight: "bold" }}>
                Login
              </p>
            </button>
            : ""
        }
      </div>
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>
    </div>
  );
}