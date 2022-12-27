import { IsAdmin, IsLoggedIn } from "../lib/utils";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signIn } from "next-auth/react";

export default function Header() {
  const loggedIn = IsLoggedIn();
  const isAdmin = IsAdmin();
  
  return (
    <div className={styles.description}>
      <div className={styles.navbuttons}>
        <a href="/about">
          <p>About Us</p>
        </a>
        <a href="/link/github">
          <p>Our GitHub</p>
        </a>
        <a href="/link/discord">
          <p>Our Discord</p>
        </a>
        <a href="/support">
          <p>Support Us</p>
        </a>
        {
          isAdmin ?
          <a href="/addmod">
            <p style={{ fontWeight: "bold" }}>
              Add Mod
            </p>
          </a>
          : !loggedIn ?
            <a>
              <button onClick={() => signIn()}>
                <p style={{ fontWeight: "bold" }}>
                  Login
                </p>
              </button>
            </a>
            : ""
        }
      </div>
      <div>
        <a href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </a>
      </div>
    </div>
  );
}