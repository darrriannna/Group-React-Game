import { BrowserRouter as Router,Routes,  Route, BrowserRouter } from 'react-router-dom';
import './Components/style/images.css'
import './Components/style/buttons.css'
import './App.css'
import LevelOne from './Components/LevelOne/LevelOne';
import Root from './Components/root';
import SoundButton from './Components/soundButton/soundButton';
import startMusic from "../public/music/startbackmusic.mp3";
function App() {
  return (	
    <Router>
      <Routes>
        <Route path='levelone' element={<LevelOne />} />
        <Route path='/' element={<Root />} />
      </Routes>
		  <SoundButton startMusic={startMusic}></SoundButton>
    </Router>
  )
}

export default App
