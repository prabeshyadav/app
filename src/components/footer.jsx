import styles from "./footer.module.css";
export default function Footer({ completed, total }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completed Todo:{completed}</span>
      <span className={styles.item}>Total Todo:{total}</span>
    </div>
  );
}
