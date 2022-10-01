import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-screen flex items-center justify-center gap-8'>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link>
    </nav>
  );
};
export default Navbar;
