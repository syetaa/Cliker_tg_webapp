import Link from "next/link";
import styles from "./Header.module.css"

import { HiHome } from "react-icons/hi2";
import { FaBasketShopping } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const Header = () => {

    return(
        <div>
            <div className={styles.textmain}>
                <Link href="/"><HiHome color="#BBBBBB" size={30}/></Link>
                <Link href="/shop"><FaBasketShopping color="#BBBBBB" size={30}/></Link>
                <Link href="/tasks"><FaClipboardList color="#BBBBBB" size={30}/></Link>
                <Link href="/friends"><FaUserFriends color="#BBBBBB" size={33}/></Link>
            </div>
        </div>
    )
}

export {Header};