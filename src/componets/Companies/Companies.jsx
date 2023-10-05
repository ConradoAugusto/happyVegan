import matilha from "../../assets/matilha.jpg";
import aum from "../../assets/aum.jpeg";
import raizes from "../../assets/raizes.jpg";
import docevidavegana from "../../assets/docevidavegana.jpg";
import nampim from "../../assets/nampim.jpeg";
import gorilla from "../../assets/gorilla.png";
import robos from "../../assets/robos.jpeg";
import styles from "./style.module.scss";

export const Companies = () => {
  return (
      <ul className={styles.listPiracicaba}>
        <li>
          <div className={styles.boxImg}>
            <img src={matilha} alt="Matilha vegan food" />
          </div>
          <h1 className="title three Green">Matilha Vegan Food</h1>
          <p className="title four Green">Bistrô</p>
          <span className="title four Green">Piracicaba-SP</span>
        </li>

        <li>
          <div className={styles.boxImg}>
            <img src={nampim} alt="nampim" />
          </div>
          <h1 className="title three Green">Nampin</h1>
          <p className="title four Green">Restaurante vegano</p>
          <span className="title four Green">Piracicaba-SP</span>
        </li>

        <li>
          <div className={styles.boxImg}>
            <img src={gorilla} alt="gorilla" />
          </div>
          <h1 className="title three Green">Gorilla Vegan Burger</h1>
          <p className="title four Green">Restaurante vegano</p>
          <span className="title four Green">Piracicaba-SP</span>
        </li>

        <li>
          <div className={styles.boxImg}>
            <img src={robos} alt="robos veganos" />
          </div>
          <h1 className="title three Green">Robos Veganos</h1>
          <p className="title four Green">Lanchonete vegano</p>
          <span className="title four Green">Piracicaba-SP</span>
        </li>

        <li>
          <div className={styles.boxImg}>
            <img src={docevidavegana} alt="doce vida vegana" />
          </div>
          <h1 className="title three Green">Doce Vida Vegana</h1>
          <p className="title four Green">Doces e Salgados</p>
          <span className="title four Green">Piracicaba-SP</span>
        </li>

        <li>
          <div className={styles.boxImg}>
            <img src={aum} alt="aum" />
          </div>
          <h1 className="title three Green">AUM natural</h1>
          <p className="title four Green">Cosméticos</p>
          <span className="title four Green">Piracicaba-SP</span>
        </li>

        <li>
          <div className={styles.boxImg}>
            <img src={raizes} alt="raizes" />
          </div>
          <h1 className="title three Green">Raízes Cosmética</h1>
          <p className="title four Green">Cosméticos</p>
          <span className="title four Green">Piracicaba-SP</span>
        </li>
      </ul>
  );
};
