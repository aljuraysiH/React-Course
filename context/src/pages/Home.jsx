import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PeopleContext } from '../Context/PeopleContext';

const Home = () => {
  // const [counter, setCounter] = useState(0);
  const { counter, increase } = useContext(PeopleContext);
  return (
    <>
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <br />
      <Link to='/about'>About</Link>
    </>
  );
};
export default Home;
