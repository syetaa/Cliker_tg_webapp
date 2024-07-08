import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import union from "@/public/Union3.png"

export default function Home() {
  return (
    <>
      <div className={styles.textmain}>
        <div className={styles.content}>
          <div className={styles.greeting}>
            Привет, <span className={styles.user_name}>Кирилл!</span>
          </div>
          <div className={styles.balance}>
            <div className={styles.text1}>
              Ваш баланс: 
            </div>
            <div className={styles.text2}>
              <Image src={union} alt="union_logo" width={32} height={32} quality={100}/> 9882
            </div>
          </div>
          <div className={styles.btn}>
            <Link href="#">Начать добычу</Link>
          </div>
        </div>
      </div>  
    </>
  );
}
