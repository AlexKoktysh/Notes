import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './Components/Home'
import Note from './Components/Note'
import { addNote, updateNote, deleteNote } from './notesReducer'

function App(props) {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home data={props}/>} />
          <Route path='/:id?' element={<Note />} />
        </Routes>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {addNote, updateNote, deleteNote})(App)