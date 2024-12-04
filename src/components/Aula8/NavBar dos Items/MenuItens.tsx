import { HiArchiveBox, HiCalendar, HiCog6Tooth } from "react-icons/hi2";
import styles from "./css.module.css";
import { useNavigate } from "react-router";

export const MenuItens = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.itens}>
      <li>
        <HiArchiveBox
          onClick={() => {
            navigate("/aula8_item1");
          }}
        />
      </li>
      <li>
        <HiCalendar
          onClick={() => {
            navigate("/aula8_item2");
          }}
        />
      </li>
      <li>
        <HiCog6Tooth
          onClick={() => {
            navigate("/aula8_item3");
          }}
        />
      </li>
    </div>
  );
};