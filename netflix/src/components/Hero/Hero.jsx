import { useEffect, useState } from 'react';
import { requests } from '../../api';
import styles from './Hero.module.scss';

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(requests.popular);
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}></div>
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt=''
      />
      <div className={styles['hero__details']}>
        <h1>{movie?.title}</h1>
        <div>
          <button>Play</button>
          <button>Watch Later</button>
        </div>
        <span>Release Date: {movie?.release_date}</span>
        <p>{movie?.overview}</p>
      </div>
    </section>
  );
};
export default Hero;
