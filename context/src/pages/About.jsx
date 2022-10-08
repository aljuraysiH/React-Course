import { Link } from 'react-router-dom';
import usePeople from '../hooks/usePeople';

const About = () => {
  const { counter, increase } = usePeople();
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <br />
      <Link to='/'>Home</Link>
    </div>
  );
};
export default About;
