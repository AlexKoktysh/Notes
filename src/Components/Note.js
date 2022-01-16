import React, { useEffect, useState } from 'react'
import styles from './Note.module.scss'

const Note = (props) => {
    const [editMode, setEditMode] = useState(props.addMode)
    const [text, setNote] = useState(props.data ? props.data.text : '')
    const [title, setTitle] = useState(props.data ? props.data.title : '')

    const addNewNote = () => {
        props.addNote(text, title)
        props.setAddMode(false)
        props.setEditMode(false)
    }

    const onSubmit = () => {
        props.addMode 
        ? addNewNote()
        : updateNote()
    }

    const updateNote = () => {
        props.updateNote(props.data.id, text, title)
        setEditMode(false)
    }

    const onNoteChange = (e) => {
        setNote(e.currentTarget.value)
    }

    const onNoteChangeTitle = (e) => {
        setTitle(e.currentTarget.value)
    }

    useEffect( () => {
        setTitle(props.data.title)
    }, [props.data.title])

    useEffect( () => {
        setNote(props.data.text)
    }, [props.data.text])

    useEffect( () => {
        setEditMode(props.addMode)
    }, [props.addMode])

    return (
        <div className={styles.card}>
            {!editMode
            ?
            <div>
                <span><h3>{props.data.title}</h3></span>
                <span className={styles.text}>{props.data.text || ''}</span>
                <div className={styles.button}>
                    <button disabled={editMode} onClick={() => setEditMode(true)}>EDIT</button>
                    <button onClick={() => props.deleteNote(props.data.id)}>DELETE</button>
                </div>
            </div>
            : <div>
                <input onChange={onNoteChangeTitle} onBlur={onNoteChangeTitle} value={title}></input>
                <input className={styles.text} onChange={onNoteChange} autoFocus={true} onBlur={onNoteChange} value={text}></input>
                <div className={styles.button}>
                    <button disabled={!editMode} onClick={onSubmit}>SAVE</button>
                    <button onClick={() => setEditMode(false)}>CANCEL</button>
                </div>
            </div>
            }
        </div>
    )
}

export default Note