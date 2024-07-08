import Link from "next/link";
import styles from "./Updates.module.css"
import Image from "next/image";

import union from "@/public/Union.png";


const Updates = () => {

    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.text}>
                    Улучшения
                </div>
                <div className={styles.content}>
                    Уже скоро...
                </div>
            </div>
        </div>
    )
}

export {Updates};