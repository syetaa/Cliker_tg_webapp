import Link from "next/link";
import styles from "./Goods.module.css"
import Image from "next/image";

import point from "@/public/Point_img.png";
import point_sm from "@/public/Point_sm.png";
import union_sm from "@/public/union_sm.png";


const Goods = () => {

    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.text}>
                    <div className={styles.text1}>
                    Товары
                    </div>
                    <div className={styles.text2}>
                    Все
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src={point}/>
                        </div>
                        <div className={styles.card_cont}>
                            <div className={styles.card_text1}>
                                Робаксы
                            </div>
                            <div className={styles.card_text2}>
                                100.000 <Image src={union_sm}/> = 1 <Image src={point_sm}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export {Goods};