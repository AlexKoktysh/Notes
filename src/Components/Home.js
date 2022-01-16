import React, { useState } from 'react'
import Note from './Note'
import styles from './Home.module.scss'

const Home = (props) => {
    const [addMode, setAddMode] = useState(false)
    const [valueSearch, setValueSearch] = useState('')
    
    const add = () => {
        setAddMode(true)
    }

    const notes = props.data.notes.notes.filter(note => {
        return note.text.toLowerCase().includes(valueSearch.toLowerCase())
    }).map(note => <Note data={note} 
                        deleteNote={props.data.deleteNote} 
                        updateNote={props.data.updateNote}
                        />)

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
                        onChange={(event) => setValueSearch(event.currentTarget.value)}
                    />
                </form>
            </div>
            <div className={styles.notes_list}>
                {addMode
                ? <Note addNote={props.data.addNote}
                                setAddMode={setAddMode}
                                addMode={addMode}
                                data={{}} 
                                /> 
                :  notes}
            </div>
        </div>
    )
}

export default Home