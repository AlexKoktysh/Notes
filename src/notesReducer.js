const ADD_NOTE = 'ADD-NOTE'
const EDIT_NOTE = 'EDIT-NOTE'
const SET_NOTE = 'DET-NOTE'
const DELETE_NOTE = 'DELETE-NOTE'

const initialState = require('./data.json')

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: 
            return {
                ...state,
                notes: [...state.notes, {id: state.notes.length + 1, text: action.text, title: action.title}]
            }
        case EDIT_NOTE:
            return {
                ...state,
                notes: state.notes.map(el => {
                    if (el.id === action.id) {
                        el.text = action.text
                        el.title = action.title
                    }
                    return el 
                } )
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(el => {
                    return el.id !== action.id
                })
            }     
        default: 
            return state
    }
}

const setNote = (id, text, title) => {
    return {
        type: EDIT_NOTE,
        id,
        text,
        title
    }
}

const deleteElement = (id) => {
    return {
        type: DELETE_NOTE,
        id
    }
}

const addElement = (text, title) => {
    return {
        type: ADD_NOTE,
        text,
        title
    }
}

export const updateNote = (id, text, title) => {
    return (dispatch) => {
        dispatch(setNote(id, text, title))
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        dispatch(deleteElement(id))
    }
}

export const addNote = (text, title) => {
    return (dispatch) => {
        dispatch(addElement(text, title))
    }
}

export default notesReducer