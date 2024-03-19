import SignIn from "./__auth/SignIn";
import Home from "./home/Home";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LevelTest from "./tests/LevelTest";

function App() {

  return (

    <Router>
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route path='/sign-in'  element={<SignIn/>}/>

      {/* tests */}
      <Route path='/level-test'  element={<LevelTest/>}/>
    </Routes>
  </Router>

  )
}

export default App
