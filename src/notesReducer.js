const ADD_NOTE = 'ADD-NOTE'
const EDIT_NOTE = 'EDIT-NOTE'

const initialState = require('./data.json')

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: 
            return {
                ...state,
                notes: [...state.notes, {id: action.id, note: action.note}]
            }
        default: 
            return state
    }
}

export const addNote = (id, note) => {
    return {
        type: ADD_NOTE,
        id,
        note
    }
}

export default notesReducer