import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Footer.module.scss'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.footer}>
            <h3 id={styles.footer__heading__one}>&copy; 2024 Architecture Studio. All Rights Reserved.</h3>
            <div className={styles.footer__icons}>
                <Link href="https://www.facebook.com">
                    <BsFacebook
                        width={30}
                        height={30}
                    />
                </Link>
                <Link href="https://www.instagram.com">
                    <BsInstagram
                        width={30}
                        height={30}
                    />
                </Link>
                <Link href="https://www.linkedin.com">
                    <BsLinkedin
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
            <h3 className={styles.footer__heading__two}>BE INSPIRED. BE INSPIRING.</h3>
        </div>
    )
}

export default Footer