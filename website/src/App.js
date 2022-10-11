import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { UserContext } from './context/userContext';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch({ type: 'LOGIN' });
    }
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route
            path='/'
            element={state.user ? <Home /> : <Navigate to='/login' />}
          />
          <Route
            path='/dashboard'
            element={state.user ? <Dashboard /> : <Navigate to='/login' />}
          />
          <Route
            path='/login'
            element={state.user ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/signup'
            element={state.user ? <Navigate to='/' /> : <Signup />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
