import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import LatestProject from '@/Components/LatestProject.json'
import styles from '@/styles/Project.module.scss'

function Project() {
    return (
        <>
        <Header/>
        <div className={styles.newsContainer}>
            <h1 className={styles.heading}>Latest Project</h1>
            <p className={styles.intro}>Stay updated with the latest and most important project from around the world.</p>
    
            <div className={styles.articles}>
              {LatestProject.data.map((data) => (
                <div key={data.id} className={styles.article}>
                  <h2 className={styles.articleTitle}>{data.title}</h2>
                  <p className={styles.date}>{data.date}</p>
                  <p className={styles.description}>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
          <Footer/>
        </>
      )
}

export default Project