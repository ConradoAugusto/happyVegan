import { AiFillStar } from "react-icons/ai";
import styles from "./style.module.scss";

export const FiveStar = () => {
  return (
    <div className={styles.star}>
      <h3>4</h3>
      <AiFillStar color="gold" />
      <AiFillStar color="gold" />
      <AiFillStar color="gold" />
      <AiFillStar color="gold" />
    </div>
  );
};
