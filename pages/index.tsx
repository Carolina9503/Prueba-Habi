import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Form } from "../components/home/form";
import Menu from "../components/home/menu/menu";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Habi</title>
        <meta name="description" content="Tracking de pizzas con Habi" />
      </Head>

      <main className={styles.main}>
        <Menu />
        <Form />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
