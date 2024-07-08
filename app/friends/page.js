import Image from "next/image";
import styles from "./page.module.css";
import { Ref } from "@/components/ref/Ref";
import { Friends_comp } from "@/components/friends_comp/Friends_comp";

export default function Friends_page() {
  return (
    <>
      <div className={styles.textmain}>
        <div className={styles.text}>
            Друзья
        </div>
        <div className={styles.content}>
            <Ref/>
            <Friends_comp/>
        </div>
        
      </div>
    </>
  );
}
