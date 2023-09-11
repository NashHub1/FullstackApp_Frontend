import React from 'react'
import styles from "../Styles/AboutAxpo.module.css"

function AboutAxpo() {

    const redirectToWebsite = () => {
        window.open('https://www.axpo.com/ch/de/ueber-uns.html', '_blank');
      };
    return (
        <div className={styles.about}>
            <button onClick={redirectToWebsite} className={styles.myButton}>Zur Axpo Webseite</button>
        </div>
    )
}

export default AboutAxpo