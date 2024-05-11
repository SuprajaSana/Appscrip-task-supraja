import styles from "./page.module.css";

import Header from "./components/layout/header/Header";
import Heading from "./components/layout/Heading";
import SecHeading from "./components/layout/body/SecHeading";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Heading></Heading>
      <SecHeading></SecHeading>
      <Footer></Footer>
    </main>
  );
}
