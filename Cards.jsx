import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Card.module.scss'
import Link from 'next/link'

function Cards({ src, alt, href,description }) {
    return (
        <section className={styles.card__section}>
                <div className={styles.image__container}>
                    <Image
                        className={styles.image__five}
                        src={src}
                        alt={alt}
                        height={210}
                        width={400}

                    />
                    <div className={styles.overlay}>
                        <span className={styles.date}>WOTD | NOV 4</span>
                        <div className={styles.view__text}> <Link href={href}>VIEW</Link> <span className={styles.arrow}>→</span></div>
                    </div>
                </div>
             <h2 className={styles.imagelink}>{description}</h2> 
            {/* <div className={styles.dev}>
                <span className={styles.last__carddata}>UI</span>
                <span className={styles.last__carddata}>UX</span>
                <span className={styles.last__carddata}>INN</span>
            </div> */}
        </section>
    )
}

export default Cards