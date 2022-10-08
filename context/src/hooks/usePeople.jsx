import { useContext } from 'react';
import { PeopleContext } from '../Context/PeopleContext';

const usePeople = (url) => {
  const context = useContext(PeopleContext);

  return context;
};

export default usePeople;
