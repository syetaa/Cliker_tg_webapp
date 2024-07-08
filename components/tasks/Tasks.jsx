import Link from "next/link";
import styles from "./Tasks.module.css"
import Image from "next/image";

import tg_logo from "@/public/Telegram_logo.png"
import union_sm from "@/public/Union_sm3.png"
import youtube_sm from "@/public/youtube_sm.png"


const Tasks = () => {

    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.tasks}>

                    <div className={styles.task}>
                        <div className={styles.img}>
                            <Image src={tg_logo} alt="tg_logo"/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.text1}>
                                Подписаться на наш канал
                            </div>
                            <div className={styles.text2}>
                                + 100 <Image src={union_sm} alt="union_logo" width={18} height={18} quality={100}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.task}>
                        <div className={styles.img}>
                            <Image src={tg_logo} alt="tg_logo"/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.text1}>
                                Подписаться на наш канал
                            </div>
                            <div className={styles.text2}>
                                + 100 <Image src={union_sm} alt="union_logo" width={18} height={18} quality={100}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.task}>
                        <div className={styles.img}>
                            <Image src={youtube_sm} alt="youtube_logo"/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.text1}>
                                Подписаться на наш канал Namechannel2
                            </div>
                            <div className={styles.text2}>
                                + 200 <Image src={union_sm} alt="union_logo" width={18} height={18} quality={100}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export {Tasks};