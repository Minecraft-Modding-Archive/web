import { Inter } from "@next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <Header />

        <div className={styles.aboutContainer}>
          <div className={styles.aboutCard}>
            <div className={styles.rowCentered}>
              <h1 className={`${inter.className} ${styles.aboutTitle}`}>VoidXWalker</h1>
              <img src="voidxwalker.png" />
            </div>
            <code className={styles.aboutContent}>Hi! I'm <a href="https://github.com/VoidXWalker">Void_X_Walker or Luna</a> (she/her), a mod developer from Germany (UTC+1) and a technical advisor and verifier for the Minecraft Java Edition leaderboards. Many of my mods are for speedrunning or performance improvements, like WorldPreview, which renders a preview of the generating world on the loading screen, or Atum, a speedrun Autoresetter. I am also the creator of the ServerSideRNG project, which aims to reduce cheating in Minecraft speedrunning. Although I currently focus on more technical mod projects, I have experience with content-focused mods and datapacks and have worked with YouTubers and Streamers such as TheHorizonMC and EufoniaStudio, for which I made a player animation mod. For modding help or other questions, feel free to dm me on Discord, <a href="https://discord.com/users/765621644097486888">Void_X_Walker#7777</a>. I am always happy to help! If you like what I do and want to buy me a coffee, here is my Ko-fi! <a href="https://ko-fi.com/voidxwalker">https://ko-fi.com/voidxwalker</a></code>
          </div>
          <div className={styles.aboutCard}>
            <div className={styles.rowCentered}>
              <h1 className={`${inter.className} ${styles.aboutTitle}`}>Kaishibi</h1>
              <img src="kaishibi.png" />
            </div>
            <code className={styles.aboutContent}>Hey! I'm <a href="https://github.com/Kaishibi">Kaishibi or Maya</a> (she/her), I'm a self taught mod developer, Discord bot developer and fullstack developer from the UK. I know 18 programming languages and I have worked with YouTubers like TheHorizonMC. I have 4 years of experience. If you want help with anything message me on Discord: <a href="https://discord.com/users/810863994985250836">Kaishibi#0620</a>. If you want to support me here is my ko-fi: <a href="https://ko-fi.com/kaishibi">https://ko-fi.com/kaishibi</a>!</code>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
