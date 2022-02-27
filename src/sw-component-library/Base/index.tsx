import { LeftNavBar } from "./LeftNavBar";
import styles from "./styles.module.scss";
import { TopNavBar } from "./TopNavBar";

export const Base = () => {
  return (
    <div className={styles.container}>
      <LeftNavBar />
      <TopNavBar className={"test"} />
    </div>
  );
};
