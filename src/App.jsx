import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import './assets/images.css'
import './App.css'
import LevelOne from './Components/LevelOne/LevelOne';
import Root from './Components/root';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='levelone' element={<LevelOne />} />
        <Route path='/' element={<Root />} />
      </Routes>
    </Router>
  )
}

export default App
