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
            <div>
                {addMode
                ?   <div>
                        <h2>Add new note</h2>
                        <div className={styles.notes_list}>
                            <Note addNote={props.data.addNote}
                                  setAddMode={setAddMode}
                                  addMode={addMode}
                                  data={{}} /> 
                        </div> 
                    </div>   
                :   <div className={styles.list}>
                        <h2>List of notes</h2>
                        <div>
                            <form className={styles.form} >
                                <input 
                                    type='text'
                                    placeholder='Search tag'
                                    onChange={(event) => setValueSearch(event.currentTarget.value)}
                                />
                            </form>
                        </div>
                        <div>
                            <button className={styles.button} onClick={add}>ADD</button>
                        </div>
                        <div className={styles.notes_list}>
                            {notes}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Home