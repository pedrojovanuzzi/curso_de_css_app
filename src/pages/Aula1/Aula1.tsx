import { useState } from "react";
import styles from "./style.module.css";
import { HiBackward } from "react-icons/hi2";
import { HiForward } from "react-icons/hi2";

export const Aula1 = () => {
  interface Colors {
    color: string;
  }

  const [index, setIndex] = useState(0);

  const colors: Colors[] = [
    { color: "red" },
    { color: "orange" },
    { color: "white" },
  ];

  function nextColor() {
    setIndex((prev) => (prev + 1) % colors.length);
  }

  function previousColor() {
    setIndex((prev) => (prev - 1 + colors.length) % colors.length);
  }

  return (
    <div className={styles.body}>
      <div className={styles.box} style={{ backgroundColor: colors[index].color }}>
        <HiBackward className={`${styles.arrow} ${styles.left}`} onClick={previousColor} />
        <HiForward className={`${styles.arrow} ${styles.right}`} onClick={nextColor} />
      </div>
    </div>
  );
};
