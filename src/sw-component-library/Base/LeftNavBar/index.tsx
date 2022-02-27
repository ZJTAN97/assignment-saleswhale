import { Logo, Campaign, Teams, Contacts, Reports, Help } from "./icons";
import styles from "./styles.module.scss";

export const LeftNavBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Logo className={styles.icons} />
        <Campaign className={styles.icons} />
        <Teams className={styles.icons} />
        <Contacts className={styles.icons} />
        <Reports className={styles.icons} />
      </div>
      <div>
        <Help className={styles.icons} />
      </div>
    </div>
  );
};
