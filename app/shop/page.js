import Image from "next/image";
import styles from "./page.module.css";
import { Goods } from "@/components/goods/Goods";
import { Updates } from "@/components/updates/Updates";

export default function Shop() {
  return (
    <>
      <div className={styles.textmain}>
        <div className={styles.text1}>
          Магазин
        </div>
        <div className={styles.content}>
          <Goods/>
        </div>
        <div className={styles.content}>
          <Updates/>
        </div>  
      </div>
    </>
  );
}
