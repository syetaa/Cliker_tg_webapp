import Image from "next/image";
import styles from "./page.module.css";
import { Tasks } from "@/components/tasks/Tasks";

export default function TasksPage() {
  return (
    <>
      <div className={styles.textmain}>
        <div className={styles.text1}>
            Задания
        </div>
        <div className={styles.text2}>
            <Tasks/>
        </div>
      </div>
    </>
  );
}
