import styles from "./styles.module.scss";

interface TopNavBarProps {
  className: string;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div>NARWHAL</div>
      <div>Teams</div>
    </div>
  );
};
