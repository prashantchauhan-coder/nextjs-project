import React from 'react'
import styles from '@/styles/HeroSection.module.scss'
import Link from 'next/link';

function HeroSection() {
  return (
    <div className={styles.background__slideshow}>
      <div className={styles.content}>
        <h1>Rethinking Modern Office Design</h1>
        <p>Designing your dreams into reality.this design are so beautifull!</p>
        <Link href="#" className={styles.btn__btn}><span>LEARN MORE</span></Link>
      </div>
    </div>
  );
}

export default HeroSection