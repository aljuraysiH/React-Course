import { useLocation, useParams } from 'react-router-dom';

const About = () => {
  const params = useParams();
  const location = useLocation();
  // console.log(location);
  console.log(params);
  return <div>About</div>;
};
export default About;
