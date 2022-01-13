const ADD_NOTE = 'ADD-NOTE'
const EDIT_NOTE = 'EDIT-NOTE'
const SET_NOTE = 'DET-NOTE'

const initialState = require('./data.json')

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: 
            return {
                ...state,
                notes: [...state.notes, {id: action.id, text: action.text}]
            }
        case EDIT_NOTE:
            return {
                ...state,
                notes: state.notes.map(el => {
                    if (el.id === action.id) {
                        el.text = action.text
                    }
                    return el 
                } )
            }    
        default: 
            return state
    }
}

const setNote = (id, text) => {
    return {
        type: EDIT_NOTE,
        id,
        text
    }
}

export const updateNote = (id, text) => {
    return (dispatch) => {
        dispatch(setNote(id, text))
    }
}

export const addNote = (id, text) => {
    return {
        type: ADD_NOTE,
        id,
        text
    }
}

export default notesReducer