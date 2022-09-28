import { useEffect, useState } from 'react';
import Movie from './Movie';
import styles from './Row.module.scss';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [url]);

  const slideLeft = () => {
    const silder = document.getElementById(`slider${title}`);
    silder.scrollLeft = silder.scrollLeft - 500;
  };
  const slideRight = () => {
    const silder = document.getElementById(`slider${title}`);
    silder.scrollLeft = silder.scrollLeft + 500;
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <AiFillCaretLeft
        onClick={slideLeft}
        className={styles.left}
        color='red'
        size={34}
      />
      <div className={styles.row} id={`slider${title}`}>
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
      <AiFillCaretRight
        onClick={slideRight}
        className={styles.right}
        color='red'
        size={34}
      />
    </div>
  );
};
export default Row;
