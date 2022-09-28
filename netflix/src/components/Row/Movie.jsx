import styles from './Movie.module.scss';
const Movie = ({ title, backdrop_path }) => {
  return (
    <div className={styles.movie}>
      <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt='' />
      <div>
        <h3>{title}</h3>
        <span>Icon</span>
      </div>
    </div>
  );
};
export default Movie;
