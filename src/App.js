import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormControlled from './components/Form-Controlled';
import FormUncontrolled from './components/FormUncontrolled';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className='App text-red-700  h-screen bg-black'>
      {/* <FormControlled /> */}
      {/* <FormUncontrolled /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about:id' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
