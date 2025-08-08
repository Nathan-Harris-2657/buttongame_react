import { Route, Routes } from "react-router-dom"

// Components
import NavBar from "../components/navbar"

// Pages
import OptionsPage from "../pages/optionspage"

// Levels
import LevelOne from "../levels/level1"

function App() {
  

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path="/options" element={<OptionsPage/>}/>
      <Route path="/levelone" element={<LevelOne/>}/>
     </Routes>
    

    </>
  )
}

export default App
