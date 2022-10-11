import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <h1>Logo</h1>
        {state.user && (
          <>
            <NavLink
              end
              to='/'
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Home
            </NavLink>
            <NavLink
              to='/dashboard'
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Dashboard
            </NavLink>
          </>
        )}
      </div>
      <div className={styles.right}>
        {!state.user && (
          <>
            <NavLink
              to='/login'
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Login
            </NavLink>
            <NavLink
              to='/signup'
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Signup
            </NavLink>
          </>
        )}
        {state.user && (
          <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
