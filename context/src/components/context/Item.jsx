import { useContext } from 'react';
import { PeopleContext } from '../../Context/PeopleContext';

const Item = ({ name, id }) => {
  const { removePerson } = useContext(PeopleContext);
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => removePerson(id)}>Delete</button>
    </div>
  );
};
export default Item;
