import usePeople from '../../hooks/usePeople';
import Item from './Item';

const List = () => {
  const { people } = usePeople();
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
