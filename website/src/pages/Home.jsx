import { useContext } from 'react';
import Card from '../components/Card/Card';
import { TodoContext } from '../context/todoContext';

const Home = () => {
  const { state } = useContext(TodoContext);
  return (
    <div>
      <h2>My Todos</h2>
      <div style={{ display: 'flex', gap: '4rem' }}>
        {state.todos.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
export default Home;
