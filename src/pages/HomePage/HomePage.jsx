import { Companies } from "../../componets/Companies/Companies";
import { Header } from "../../componets/Header";
import { InputSearch } from "../../componets/forms/InputSearch";
import styles from "./style.module.scss"

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main className={styles.main}>
          <InputSearch />
          <h2 className="title three Green center">Empresas Veganas em Piracicaba</h2>
          <Companies/>
        </main>
      </div>
    </>
  );
};
