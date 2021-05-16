import styles from "../styles/invalid.module.css";
import format from "../styles/imageformat.module.css";

export function invalid() {
    //Sends error render if the search is invalid
  return (
    <div className={styles.error}>Please enter something space related!</div>
  );
}
