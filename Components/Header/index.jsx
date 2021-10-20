import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.Header}>
      <h1 className={styles.title}>Page title</h1>
      <nav>
        <ul>
          <li>
            <a className={styles.linkHoverEffect} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={styles.linkHoverEffect} href="/about">
              About
            </a>
          </li>
          <li className={`${styles.dropDownHover}`}>
            <a className={`${styles.linkHoverEffect } `} href="/ciphers">
              Ciphers
            </a>
            <div className={styles.dropDown}>
            <ul>
            <li>
            <a href='ciphers/caesar'>Caesar Cipher</a>
            </li>
            </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
