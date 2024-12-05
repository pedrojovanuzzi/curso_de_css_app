import styles from "./style.module.css";
import logo from "../../imgs/Aula6_imgs/logo.svg";
import emoji1 from "../../imgs/Aula6_imgs/emoji-1.svg";
import emoji2 from "../../imgs/Aula6_imgs/emoji-2.svg";
import emoji3 from "../../imgs/Aula6_imgs/emoji-3.svg";
import emoji4 from "../../imgs/Aula6_imgs/emoji-4.svg";
import emoji5 from "../../imgs/Aula6_imgs/emoji-5.svg";
import emoji6 from "../../imgs/Aula6_imgs/emoji-6.svg";

export const Aula6 = () => {
  return (
    <div className={styles.body}>
      <main className={styles.emojiMain}>
        <img src={logo} alt="" />
        <h1>A sua biblioteca de Emojis, <strong>GRÁTIS</strong>  e para <strong>SEMPRE</strong> </h1>
        <p>É só buscar e depois fazer o download. <br></br>EXPERIMENTE</p>
        <aside>
          <input type="text" placeholder="Ex: Smile" />
          <input type="button" value="Buscar" />
        </aside>
      </main>
      <div className={styles.emojisAnimationWrapper}>
        <img src={emoji1} alt="" />
        <img src={emoji2} alt="" />
        <img src={emoji3} alt="" />
        <img src={emoji4} alt="" />
        <img src={emoji5} alt="" />
        <img src={emoji6} alt="" />
      </div>
    </div>
  );
};
