import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './components/Test';
import Splash from './components/Splash';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
