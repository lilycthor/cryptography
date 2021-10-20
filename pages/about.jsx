import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import _ from "lodash";
export default function About() {
  return (
    <div className={`pageBody`}>
      <div className={styles.pageContainer}>
      <h1>About page</h1>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p>Paragraph</p>
        <div>Container</div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <ul>
          <li>list item 1</li>
          <li>list item 2 </li>
        </ul>
        <ol>
          <li>list item 1</li>
          <li>list item 2 </li>
        </ol>
        {_.map([1, 2, 3, 4, 5], (eachItem) => (
          <p>{eachItem}</p>
        ))}
      </div>
    </div>
  );
}
