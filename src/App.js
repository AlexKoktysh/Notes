import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './Components/Home'
import Note from './Components/Note'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/note' element={<Note />} />
      </Routes>
    </div>
  )
}

export default App