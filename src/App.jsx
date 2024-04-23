import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';

import './App.css'
import LevelOne from './Components/LevelOne/LevelOne';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='levelone' element={<LevelOne />} />
      </Routes>
    </Router>
  )
}

export default App
