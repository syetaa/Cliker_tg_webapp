import Link from "next/link";
import styles from "./Friends_comp.module.css"
import Image from "next/image";

import avatar from "@/public/User,Profile.png"
import friends from "@/public/Frame.png"

const Friends_comp = () => {

    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.text}>
                    <div className={styles.text1}>
                        9 Друзей
                    </div>
                    <div className={styles.text1}>
                        11 Рефералов
                    </div>
                </div>
                <div className={styles.cards}>

                    <div className={styles.card}>
                        <div className={styles.user_info}>
                            <div className={styles.avatar}>
                                <Image src={avatar} alt="avatar"/>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.nick}>
                                    Nickname1
                                </div>
                                <div className={styles.friends}>
                                    2 <Image src={friends} alt="friends"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.score}>
                            485 
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.user_info}>
                            <div className={styles.avatar}>
                                <Image src={avatar} alt="avatar"/>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.nick}>
                                    Nickname2
                                </div>
                                <div className={styles.friends}>
                                    0 <Image src={friends} alt="friends"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.score}>
                            600 
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.user_info}>
                            <div className={styles.avatar}>
                                <Image src={avatar} alt="avatar"/>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.nick}>
                                    Nickname3
                                </div>
                                <div className={styles.friends}>
                                    4 <Image src={friends} alt="friends"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.score}>
                            1250 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Friends_comp};