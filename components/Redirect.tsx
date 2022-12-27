import { Inter } from "@next/font/google";
import Router from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

type RedirectProps = {
  url: string
};

export default class Redirect extends React.Component<RedirectProps> {
  componentDidMount(): void {
    Router.push(this.props.url);
  }

  render(): React.ReactNode {
    return (
      <>
        <main className={styles.main}>
          <Header />

          <h1 className={inter.className}>Redirecting...</h1>

          <Footer />
        </main>
      </>
    );
  }
}
