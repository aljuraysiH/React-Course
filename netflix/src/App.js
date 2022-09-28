import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Row from './components/Row/Row';
import { requests } from './api';

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
      <Navbar />
      <Hero />
      <Row title='Popular' url={requests.popular} />
      <Row title='Top Rated' url={requests.top_rated} />
      <Row title='Upcomong' url={requests.upcoming} />
    </>
  );
}

export default App;
