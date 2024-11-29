import React from 'react'
import styles from '@/styles/About.module.scss'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

function About() {
    let str="name";
    return (
        <>
            <Header />
            <div className={styles.aboutContainer}>
                <h1>About Me</h1>
                <p>
                    Hello! I'm {str}, a passionate web developer with a focus on front-end technologies. I love building user-friendly websites and web applications that provide great user experiences. My skills include React, Next.js, HTML, CSS, and JavaScript. I am always eager to learn new technologies and grow as a developer.
                </p>
                <h2>Products</h2>
                <ul>
                    <li>Products 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse in pariatur ipsam ut deleniti reiciendis quisquam aspernatur delectus voluptatem perspiciatis ullam, quasi nostrum. Magni est quod pariatur repudiandae nesciunt.</li>
                    <li>Products 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae aperiam aspernatur velit suscipit ullam, temporibus totam qui quisquam, eius laudantium necessitatibus modi, earum quibusdam ut. Quia nihil ea ex!</li>
                    <li>Products 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae aperiam aspernatur velit suscipit ullam, temporibus totam qui quisquam, eius laudantium necessitatibus modi, earum quibusdam ut. Quia nihil ea ex!</li>
                    <li>Products 4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae aperiam aspernatur velit suscipit ullam, temporibus totam qui quisquam, eius laudantium necessitatibus modi, earum quibusdam ut. Quia nihil ea ex!</li>
                    <li>Products 5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae aperiam aspernatur velit suscipit ullam, temporibus totam qui quisquam, eius laudantium necessitatibus modi, earum quibusdam ut. Quia nihil ea ex!</li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export default About