import React from 'react'
import styles from "../Styles/Home.module.css"
import CustomTable from './CustomTable'

function Home() {
    return (
        <div className={styles.home}>
            <CustomTable></CustomTable>
            
        </div>
    )
}

export default Home