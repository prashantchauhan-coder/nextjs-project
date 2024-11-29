import React from 'react'
import ServicesDeta from '@/Components/ServicesDeta.json'
import styles from '@/styles/Services.module.scss'

function Services() {
    return (
        <section id={styles.services} className={styles.services__section}>
            <div className={styles.container}>
                <h2 className={styles.section__title}> Architectural Services</h2>
                <div className={styles.services__list}>
                    {ServicesDeta.services.map((info) => { 

                        const dynamicClass = `${styles.service__item} ${styles[`service__item__${info.id}`]}`;
                        return (
                            <div key={info.id} className={dynamicClass}>
                                <h3 className={styles.service__title}>{info.title}</h3>
                                <p className={styles.service__description}>{info.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;