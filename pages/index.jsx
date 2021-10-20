import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from 'react';
export default function Home() {

  const [counter, updateCounter] = useState(0)

  return (
    <div className={`pageBody`}>
      <h1>Homepage</h1>
      <button onClick={()=>updateCounter(counter-1)}>-</button>
      <p>{counter}</p>
      <button onClick={()=>updateCounter(counter+1)}>+</button>
    </div>
  );
}
