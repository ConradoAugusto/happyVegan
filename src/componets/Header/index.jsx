import { IoSearchCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./style.module.scss"

export const Header = () => {
  return (
    <div className={styles.menuSm}>
        <div className={styles.logoHeader}>
        <h1>HappyVegan</h1>
        <img  src={logo} alt="logo" />
      </div>

      <header >
        <nav>
          <Link to="/">
            Todos
          </Link>

          <Link>Blog</Link>

          <Link>Veganismo</Link>

          <Link>Mais</Link>
        </nav>
      </header>


        <div className={styles.user}>
        <IoSearchCircle size={30} color="#004442" />
          <button>Add Produto</button>
          <button>Login</button>
        </div>
    </div>
  );
};
