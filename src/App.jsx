import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./Components/style/images.css";
import "./Components/style/buttons.css";
import "./App.css";
import LevelOne from "./Components/LevelOne/LevelOne";
import Root from "./Components/root";
import SoundButton from "./Components/soundButton/soundButton";
import startMusic from "../public/music/startbackmusic.mp3";

import LosingPage from "./Components/LosingPage/LosingPage";
import WinPage from "./Components/winPage/winPage";

function App() {
  return (	
    <Router>
      <div className="container sky-background">
        <Routes>
          <Route path="levelone" element={<LevelOne />} />
          <Route path="loosingPage" element={<LosingPage />} />
          <Route path="winPage" element={<WinPage />} />
          <Route path="/" element={<Root />} />
        </Routes>
        <SoundButton startMusic={startMusic}></SoundButton>
      </div>
    </Router>
  )
}

export default App
