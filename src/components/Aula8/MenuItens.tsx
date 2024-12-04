import { HiArchiveBox, HiCalendar, HiCog6Tooth } from "react-icons/hi2";
import styles from "./css.module.css";

export const MenuItens = () => {
  return (
    <div className={styles.itens}>
      <li>
        <HiArchiveBox />
      </li>
      <li>
        <HiCalendar />
      </li>
      <li>
        <HiCog6Tooth />
      </li>
    </div>
  );
};
