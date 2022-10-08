import { useReducer, useState } from 'react';
import './App.css';
import { initialState, peopleReducer } from './reducers/peopleReducer';

function App() {
  const [state, dispatch] = useReducer(peopleReducer, initialState);

  return (
    <div className='App'>
      <button
        onClick={() =>
          dispatch({
            type: 'ADD_PERSON',
            payload: { name: 'nasser', id: 3 },
          })
        }
      >
        Add
      </button>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h1>{person.name}</h1>
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_PERSON', payload: { id: person.id } })
              }
            >
              Delete
            </button>
          </div>
        );
      })}
      <h2>{state.numberOfPeople}</h2>
    </div>
  );
}

export default App;
