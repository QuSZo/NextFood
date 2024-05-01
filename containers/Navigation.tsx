import React from 'react';
import Image from 'next/image'
import logo from '@/assets/logo.png'
import styles from './Navigation.module.css'
import Link from "next/link";

function Navigation() {
    return (
        <header className={styles.container}>
            <div className={styles.navigationWrapper}>
                <Image src={logo} className={styles.logo} alt={"logo"}/>
                <ul className={styles.links}>
                    <li>
                        <Link href={"/"}>Strona główna</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>Kontakt</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navigation;

