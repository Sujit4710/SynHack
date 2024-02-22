import Register from './pages/register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
