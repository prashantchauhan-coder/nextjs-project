import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react'
import styles from '@/styles/Contect.module.scss'


function Contect() {
    let email= "your.email@example.com";
    return (
        <>
            <Header />
            <div className={styles.contactContainer}>
                <h1>Contact Me</h1>
                <p>If you would like to get in touch with me, feel free to reach out via email or fill out the form below.</p>

                <h2>Email</h2>
                <p>Email:{email}</p>

                <h3>Phone</h3>
                <p>Phone:(123)-456-7890</p>
                <form className={styles.contactForm}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Contect