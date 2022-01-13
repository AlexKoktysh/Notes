import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import styles from './Note.module.scss'

const Note = (props) => {
    const [editNote, setEditNote] = useState(false)
    const [text, setNote] = useState(props.text)
    
    const activateEdit = () => {
        setEditNote(true)
        console.log('активация', editNote)
    }

    const deactivateEdit = () => {
        props.updateNote(props.id, text)
        setEditNote(false)
        console.log('деактивация', editNote)
    }

    const onNoteChange = (e) => {
        setNote(e.currentTarget.value)
    }

    useEffect( () => {
        setNote(props.text)
    }, [props.text])

    return (
        <div className={styles.card}>
            <h3>Title</h3>
            {!editNote
            ? <div>
                <span className={styles.text} onDoubleClick={activateEdit}>{props.text}</span>
                <div className={styles.button}>
                            <Button disabled={editNote} onClick={activateEdit}>EDIT</Button>
                            <Button>DELETE</Button>
                </div>
            </div>
            : <div>
                <input className={styles.text} onChange={onNoteChange} autoFocus={true} onBlur={deactivateEdit} value={text}></input>
                <div className={styles.button}>
                            <Button disabled={!editNote} onClick={deactivateEdit}>SAVE</Button>
                            <Button>CANCEL</Button>
                </div>
            </div>
            }
        </div>
    )
}

export default Note