import React from "react";
import { Base } from "sw-component-library";
import styles from "./styles.module.scss";
import { Chart } from "./components/Icon/Chart";
import { BusinessCard } from "./components/BusinessCard";

export const Teams = () => {
  enum FILTER_TYPES {
    ALL = "ALL",
    FAVOURITES = "FAVOURITES",
    ARCHIEVED = "ARCHIEVED",
  }

  const [filter, setFilter] = React.useState<FILTER_TYPES>(FILTER_TYPES.ALL);

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
            <div
              className={`${
                filter === FILTER_TYPES.ALL
                  ? styles.filter__item_selected
                  : styles.filter__item
              }`}
              onClick={() => setFilter(FILTER_TYPES.ALL)}
            >
              All
            </div>
            <div
              className={`${
                filter === FILTER_TYPES.FAVOURITES
                  ? styles.filter__item_selected
                  : styles.filter__item
              }`}
              onClick={() => setFilter(FILTER_TYPES.FAVOURITES)}
            >
              Favourites
            </div>
            <div
              className={`${
                filter === FILTER_TYPES.ARCHIEVED
                  ? styles.filter__item_selected
                  : styles.filter__item
              }`}
              onClick={() => setFilter(FILTER_TYPES.ARCHIEVED)}
            >
              Archieved
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.container__cards}>
            <div className={styles.container__cards_header}>
              <div>All Teams</div>
              <div className={styles.pagination}>
                Showing 65 out of 65 teams
              </div>
            </div>
            <div className={styles.container__business_cards}>
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
            </div>
          </div>
          <div className={styles.activity}>Activity</div>
        </div>
      </div>
    </Base>
  );
};
