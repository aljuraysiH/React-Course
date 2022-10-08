import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <PropDrilling /> */}
      {/* <Context /> */}
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
