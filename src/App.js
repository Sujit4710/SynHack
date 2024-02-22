import Register from './pages/register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login'
import Stage from "./component/Stage";
import Quizz from './pages/Quizz';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/stage" element={<Stage/>} />
        <Route path="/quizz" element={<Quizz/>}/>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
