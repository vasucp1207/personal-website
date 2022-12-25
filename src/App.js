import './App.css';
import { Routes, Route } from 'react-router-dom'
import OpenSource from './pages/OpenSource';
import Main from './pages/Main';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/openSource' element={<OpenSource />} />
      </Routes>
      
    </div>
  );
}

export default App;
