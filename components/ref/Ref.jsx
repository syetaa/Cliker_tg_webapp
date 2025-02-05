import Link from "next/link";
import styles from "./Ref.module.css"
import Image from "next/image";

import union from "@/public/Union3.png";


const Ref = () => {

    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.score}>
                    5000 <Image src={union} alt="union" width={32} height={32} quality={100}/>
                </div>
                <div className={styles.ref_btn}>
                    Пригласи друга
                </div>
                <div className={styles.text}>
                Получай 10% от твоих друзей + 5% от друзей реферала    
                </div>
            </div>
        </div>
    )
}

export {Ref};