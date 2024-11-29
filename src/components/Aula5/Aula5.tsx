import styles from "./style.module.css";

export const Aula5 = () => {
  return (
    <div className={styles.body}>
      <header className={styles.dashboardHeader}>
        <button>Profile</button>
        <button>Setting</button>
        <span>
          <strong>Pedro</strong>
        </span>
      </header>
      <aside className={styles.dashboardAside}>
        <h1>DASHBOARD</h1>
        <button>Dashboard</button>
        <button>Announced</button>
        <button>Preparation</button>
        <button>Sorted</button>
        <button>Distributed</button>
        <button>Logout</button>
      </aside>
      <head className={styles.dashboardHead}>
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
      </head>
      <main className={styles.dashboardMain}>
        <div className={styles.announcedTodayWrapper}>
          <span>Announced Today</span>
          <img src="" alt="" />
        </div>
        <div className={styles.distributedTodayWrapper}>
          <span>Sorted Today</span>
          <img src="" alt="" />
        </div>
        <div className={styles.sortedTodayWrapper}>
          <span>Prepared Today</span>
          <img src="" alt="" />
        </div>
      </main>
    </div>
  );
};
