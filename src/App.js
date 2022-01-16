import { connect } from 'react-redux'
import './App.scss'
import Home from './Components/Home'
import { addNote, updateNote, deleteNote } from './notesReducer'

function App(props) {
  return (
    <Home data={props} />
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {addNote, updateNote, deleteNote})(App)