import { useState } from 'react';
import DevList from './components/DevList';

function App() {
  const [name, setName] = useState('');

  console.log(name);
  const [name2, setName2] = useState('rasha');

  // const name2 = 'rasha';

  return (
    <div>
      <DevList />
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
