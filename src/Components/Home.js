import React, { useState } from 'react'
import Note from './Note'
import styles from './Home.module.scss'

const Home = (props) => {
    const [addNoteMode, setAddNote] = useState(false)
    const notes = props.data.notes.notes
    
    const add = () => {
        setAddNote(true)
    }

    const [value, setValue] = useState('')

    const filteredNote = notes.filter(note => {
        return note.text.toLowerCase().includes(value.toLowerCase())
    })

    const fNotes = filteredNote.map(note => <Note id={note.id} 
        text={note.text} 
        title={note.title}
        deleteNote={props.data.deleteNote} 
        updateNote={props.data.updateNote} />)

    return (
        <div className={styles.home}>
            <h2>HOME</h2>
            <div className={styles.btn_circle}>
                <button onClick={add}>ADD</button>
            </div>
            <div>
                <form>
                    <input 
                        type='text'
                        placeholder='Search tag'
                        onChange={(event) => setValue(event.currentTarget.value)}
                    />
                </form>
            </div>
            <div className={styles.notes_list}>
                {addNoteMode ? <Note addNote={props.data.addNote}
                                    addMode={addNoteMode} 
                                    setAddNote={setAddNote} /> 
                         :  fNotes}
            </div>
        </div>
    )
}

export default Home