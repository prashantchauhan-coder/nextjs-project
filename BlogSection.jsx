import React from 'react'
import BlogDeta from '@/Components/BlogDeta.json'
import styles from '@/styles/BlogSection.module.scss'
import Image from 'next/image';

function BlogSection() {

  return (
    <div className={styles.blogsContainer}>
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}> Latest Blog</h2>
      {BlogDeta.blogs.map((data) => {
        const id = parseInt(data.id, 10);

return(

        <div key={data.id} className={id === 2 || id === 4 || id === 6 ? styles.blogCard__class : styles.blogCard} >
          <Image
            src={data.image}
            alt={data.title}
            width={550}
            height={310}
          />
          <div className={styles.blog}>
            <h3 className={styles.blog__title}>{data.title}</h3>
            <p className={styles.blog__description}>{data.description}</p>
          </div>
        </div>
);
      })}
    </div>
  );
}

export default BlogSection;