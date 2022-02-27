import styles from "./styles.module.scss";
import { User } from "./Icons/User";
import { Notification } from "./Icons/Notification";

export const TopNavBar: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header__container}>
        <div className={styles.header}>NARWHAL</div>
        <div className={styles.header__selected}>Teams</div>
      </div>
      <div className={styles.user__container}>
        <Notification className={styles.notification} />
        <div className={styles.user__name}>Hello John</div>
        <User className={styles.profile__pict} />
      </div>
    </div>
  );
};
