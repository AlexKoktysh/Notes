import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './Note.module.scss'

const Note = (props) => {
    return (
        <div className={styles.card}>
            <h3>Title</h3>
            <div className={styles.text}>Rfrjq n j ntrvhg mhkdujfgnbgh hjq n j ntrvhg mhkdujfgnbgh hjq n j ntrvhg mhkdujfgnbgh hjq n j ntrvhg mhkdujfgnbgh hjq n j ntrvhg mhkdujfgnbgh hjq n j ntrvhg mhkdujfgnbgh hjq n j ntrvhg mhkdujfgnbgh hbjmhgj gyuj fghgf</div>
            <div className={styles.button}>
                <Button>EDIT</Button>
                <Button>DELETE</Button>
            </div>
        </div>
    )
}

export default Note