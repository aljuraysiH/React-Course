import { useState } from 'react';
import { data } from '../../data';
import List from './List';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  function removePerson(id) {
    const newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  }

  return <List people={people} removePerson={removePerson} />;
};
export default PropDrilling;
