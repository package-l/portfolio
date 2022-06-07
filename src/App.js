import './App.css';
import './shadows.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import AnimalCrossing from './components/AnimalCrossing'
import PodArchive from './components/PodArchive'
import SpaceDrawing from './components/SpaceDraw'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/animalcrossing" element={<AnimalCrossing />} />
        <Route path="/podarchive" element={<PodArchive />} />
        <Route path="/spacedrawing" element={<SpaceDrawing />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App