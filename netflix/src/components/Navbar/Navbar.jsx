import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>NETFLIX</h1>
      <ul>
        <li>
          <button>Signin</button>
        </li>
        <li>
          <button>Signup</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
