import styles from "./style.module.css";

export const Aula2 = () => {
  return (
    <div className={styles.aula2_body}>
      <div className={styles.check_div}>
        <h1>CheckBox</h1>
        <label htmlFor="one">
          <input className={styles.input_aula2} type="checkbox" name="one" id="one" />
          <span className={styles.span_aula2}></span>
          <span className={styles.a_aula2}>One</span>
        </label>
        <label htmlFor="two">
          <input className={styles.input_aula2} type="checkbox" name="two" id="two" />
          <span className={styles.span_aula2}></span>
          <span className={styles.a_aula2}>Two</span>
        </label>
        <label htmlFor="three">
          <input className={styles.input_aula2} type="checkbox" name="three" id="three" />
          <span className={styles.span_aula2}></span>
          <span className={styles.a_aula2}>Three</span>
        </label>
      </div>
    </div>
  );
};
