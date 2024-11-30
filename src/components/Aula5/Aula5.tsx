import styles from "./style.module.css";
import chart1 from "../../imgs/Aula5_imgs/chart1.png";
import chart2 from "../../imgs/Aula5_imgs/chart2.png";
import chart3 from "../../imgs/Aula5_imgs/chart3.png";

import {
  HiHome,
  HiArrowLeftOnRectangle,
  HiArchiveBoxArrowDown,
  HiOutlinePencil,
  HiListBullet,
  HiTruck,
  HiUser,
  HiMiniCog6Tooth,
} from "react-icons/hi2";

export const Aula5 = () => {
  return (
    <div className={styles.body}>
      <header className={styles.dashboardHeader}>
        <button>
          <HiUser /> Profile
        </button>
        <button>
          <HiMiniCog6Tooth /> Setting
        </button>
        <span>
          <strong>Pedro</strong>
        </span>
      </header>
      <aside className={styles.dashboardAside}>
        <h1>DASHBOARD</h1>
        <button>
          <HiHome /> Dashboard
        </button>
        <button>
          <HiArchiveBoxArrowDown />
          Announced
        </button>
        <button>
          <HiOutlinePencil />
          Preparation
        </button>
        <button>
          <HiListBullet />
          Sorted
        </button>
        <button>
          <HiTruck />
          Distributed
        </button>
        <button>
          <HiArrowLeftOnRectangle />
          Logout
        </button>
      </aside>

      <main className={styles.dashboardMain}>
        <div className={styles.headWrapper}>
          <div>
            Announced Today <span>235600</span>
          </div>
          <div>
            Prepared Today <span>16738</span>
          </div>
          <div>
            Sorted Today <span>286</span>
          </div>
          <button>See More</button>
        </div>
        <div className={styles.announcedTodayWrapper}>
          <img src={chart1} alt="" />
        </div>
        <div className={styles.distributedTodayWrapper}>
          <img className={styles.imgHalf} src={chart2} alt="" />
        </div>
        <div className={styles.sortedTodayWrapper}>
          <img className={styles.imgHalf} src={chart3} alt="" />
        </div>
      </main>
    </div>
  );
};
