import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import styles from './Note.module.scss'

const Note = (props) => {
    const [editNote, setEditNote] = useState(false)
    const [text, setNote] = useState(props.text)

    console.log(props.text, editNote)

    const addNewNote = () => {
        props.addNote(text)
        props.setAddNote(false)
    }

    const onSubmit = () => {
        console.log('submit', props.addMode)
        props.addMode 
        ? addNewNote()
        : updateNote()
    }
    
    const activateEdit = () => {
        console.log('активация')
        setEditNote(true)
    }

    const updateNote = () => {
        props.updateNote(props.id, text)
        setEditNote(false)
    }

    const onNoteChange = (e) => {
        setNote(e.currentTarget.value)
    }

    useEffect( () => {
        setNote(props.text)
    }, [props.text])


    return (
        <div className={styles.card}>
            <h3>{props.title}</h3>
            {!editNote
            ? <div>
                <span className={styles.text}>{props.text}</span>
                <div className={styles.button}>
                    <Button disabled={editNote} onClick={activateEdit}>EDIT</Button>
                    <Button>DELETE</Button>
                </div>
            </div>
            : <div>
                <input className={styles.text} onChange={onNoteChange} autoFocus={true} onBlur={updateNote} value={text}></input>
                <div className={styles.button}>
                    <Button disabled={!editNote} onClick={onSubmit}>SAVE</Button>
                    <Button>CANCEL</Button>
                </div>
            </div>
            }
        </div>
    )
}

export default Note