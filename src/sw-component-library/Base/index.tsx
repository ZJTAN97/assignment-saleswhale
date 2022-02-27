import { LeftNavBar } from "./LeftNavBar";
import styles from "./styles.module.scss";
import { TopNavBar } from "./TopNavBar";

interface BaseProps {
  children?: React.ReactNode;
}

export const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <LeftNavBar />
      <div className={styles.main__content}>
        <TopNavBar />
        {children}
      </div>
    </div>
  );
};
