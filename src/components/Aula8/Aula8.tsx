import { useState } from "react";
import styles from "./css.module.css";
import { HiMiniBars3, HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { MenuItens } from "./MenuItens";

export const Aula8 = () => {
  const [isOpen, setOpen] = useState(false);

  function OpenMenu() {
    setOpen((prev) => !prev);
  }

  return (
    <div className={styles.body}>
      <header className={isOpen ? styles.headerOpen : styles.headerClosed}>
        <div className={styles.navWrapper}>
          <nav>
            <span>
              {isOpen ? (
                <HiMiniBars3
                  onClick={OpenMenu}
                  className={styles.menu_mobile}
                />
              ) : (
                <HiMiniBars3
                  onClick={OpenMenu}
                  className={styles.menu_mobile_oppened}
                />
              )}
              {isOpen ? (
                <HiChevronLeft
                  onClick={OpenMenu}
                  className={styles.menu_pc_openned}
                />
              ) : (
                <HiChevronRight onClick={OpenMenu} className={styles.menu_pc} />
              )}
            </span>
          </nav>
        </div>
        {isOpen ? <MenuItens /> : ""}
      </header>
      <div className={styles.centerPage}>Centro da Pagina</div>
    </div>
  );
};
