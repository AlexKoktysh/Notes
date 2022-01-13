import React, { useState } from 'react'
import Note from './Note'
import styles from './Home.module.scss'

const Home = (props) => {
    const [addNote, setAddNote] = useState(false)
    const notes = props.data.notes.notes.map(note => <Note id={note.id} text={note.text} addNote={props.data.addNote} updateNote={props.data.updateNote} />)
    const add = () => {
        setAddNote(true)
    }
    return (
        <div className={styles.home}>
            <h2>HOME</h2>
            <div className={styles.btn_circle}>
                <button type='button' type="button" class="btn btn-primary btn-circle"><i class="fas fa-map" onClick={() => add}></i>+</button>
            </div>
            {addNote && <Note />}
            <div className={styles.notes_list}>
                {notes}
            </div>
        </div>
    )
}

export default Home