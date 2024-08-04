import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Home from './pages/Home';
import Todo from './pages/TodoComponents/TodoApp.js';
import Notes from './pages/NotesComponents/Notes.js';
import Cal from './pages/Cal.js'
import { Login } from './components/login_screen.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Dashboard />}>
              <Route path='/Home' exact element={<Home />} />
              <Route path='/Todo' element={<Todo />} />
              <Route path='/Notes' element={<Notes />} />
              <Route path= '/Cal' element={<Cal/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;