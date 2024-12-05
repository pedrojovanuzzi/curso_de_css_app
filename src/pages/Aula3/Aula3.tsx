import styles from "./style.module.css";

import img1 from "../../imgs/Aula3_imgs/1.jpg";
import img2 from "../../imgs/Aula3_imgs/2.jpg";
import img3 from "../../imgs/Aula3_imgs/3.jpg";

export const Aula3 = () => {
  return (
    <div className={styles.body}>
      <div className={styles.gallery}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={img1} alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={img2} alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};
