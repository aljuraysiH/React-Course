import { Trash } from 'phosphor-react';
import { useState } from 'react';
import data from '../data';

function DevList() {
  const [devs, setDevs] = useState(data);

  function removeDev(id) {
    const newDevs = devs.filter((dev) => dev.id !== id);
    setDevs(newDevs);
  }

  return (
    <div className='listContainer'>
      <h1>المبرمجون</h1>
      {devs.map((dev) => {
        return (
          <div key={dev.id} className='dev'>
            <h2>{dev.name}</h2>
            <Trash size={32} onClick={() => removeDev(dev.id)} />
          </div>
        );
      })}
      <button onClick={() => setDevs([])}>مسح الكل</button>
    </div>
  );
}
export default DevList;
