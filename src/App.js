import './App.css';
import Header from "./components/Header.js"
import Workout from "./components/Workout.js"
import Nutrition from "./components/Nutrition.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/Workout" element={<Workout />} />
          <Route path="/Nutrition" element={<Nutrition />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
