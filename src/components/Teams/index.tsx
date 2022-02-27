import { Base } from "sw-component-library";
import styles from "./styles.module.scss";
import { Chart } from "./Icon/Chart";

export const Teams = () => {
  return (
    <Base>
      <div>
        <div className={styles.container__head}>
          <div className={styles.chart}>
            <Chart className={styles.chart__logo} />
            <div className={styles.chart__text}>Teams</div>
          </div>
          <div className={styles.btn}>CREATE NEW TEAM</div>
        </div>
        <div className={styles.fsp__head}>
          <div className={styles.fsp__row}>
            <div className={styles.filter__item}>All</div>
            <div className={styles.filter__item}>Favorites</div>
            <div className={styles.filter__item}>Archieved</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.container__cards}>Content</div>
          <div className={styles.activity}>Activity</div>
        </div>
      </div>
    </Base>
  );
};
