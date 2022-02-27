import { Button } from "./components/Button/Button";
import styles from "./styles.module.css";

export const App = () => {
  console.log("hello world!");

  return (
    <div>
      <div className={styles.sampleDiv}>
        <h1>SalesWhales!!</h1>
      </div>

      <Button />
    </div>
  );
};
