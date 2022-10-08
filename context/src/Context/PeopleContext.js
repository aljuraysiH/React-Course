import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { data } from '../data';

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState(data);
  const [counter, setCounter] = useState(0);

  const removePerson = (id) => {
    const newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };

  const increase = () => {
    setCounter(counter + 1);
    toast.success('Counter increased');
  };

  return (
    <PeopleContext.Provider value={{ people, removePerson, counter, increase }}>
      {children}
    </PeopleContext.Provider>
  );
};
