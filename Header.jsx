import React from 'react'
import Link from 'next/link';
import styles from '@/styles/Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <h1>logo</h1>
      </div>
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <Link className={styles.link} href="/">Home</Link>
          </li>
          <li>
            <Link className={styles.link} href="/About">About</Link>
          </li>
          <li>
            <Link className={styles.link} href="/Project">Project</Link>
          </li>
        </ul>
      </nav>
        <Link href="/Contect" className={styles.contact__link}>Contact Us</Link>
    </header>

  )
}


export default Header