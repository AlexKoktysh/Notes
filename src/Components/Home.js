import React from 'react'
import Note from './Note'
import styles from './Home.module.scss'

const Home = (props) => {
    return (
        <div className={styles.home}>
            <h2>HOME</h2>
            <div className={styles.notes_list}>
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </div>
    )
}

export default Home