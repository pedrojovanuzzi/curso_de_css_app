import { useState } from "react";
import styles from "./style.module.css";

export const Aula4 = () => {
  const [input, setInput] = useState("");

  function Clear() {
    return setInput("");
  }

  function doMath() {
    try {
      const result = eval(input);
      setInput(String(result));
    } catch (error) {
      setInput("Erro");
      setTimeout(() => {
        setInput("");
      }, 1000);
    }
  }

  function concatString(value: string) {
    setInput((prev) => prev + value);
  }

  return (
    <div className={styles.body}>
      <div className={styles.calculadoraWrapper}>
        <div className={styles.calculadoraDisplay}>
          <span>{input || 0}</span>
          <span onClick={Clear}>AC</span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            %
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            *
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            /
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            7
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            8
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            9
          </span>
          <span onClick={doMath}>=</span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            4
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            5
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            6
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            -
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            1
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            2
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            3
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            +
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            0
          </span>
          <span
            onClick={(e) => concatString((e.target as HTMLElement).innerText)}
          >
            .
          </span>
        </div>
      </div>
    </div>
  );
};
