import styles from './Card.module.scss';

const Card = ({ todo }) => {
  return (
    <div className={styles.card}>
      <h3>{todo.name}</h3>
    </div>
  );
};
export default Card;
