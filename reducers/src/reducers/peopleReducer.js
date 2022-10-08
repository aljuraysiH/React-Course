export const peopleReducer = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    console.log(action.payload);
    return { ...state, people: [...state.people, action.payload] };
  }
  if (action.type === 'DELETE_PERSON') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return {
      ...state,
      people: newPeople,
      numberOfPeople: state.numberOfPeople - 1,
    };
  }
  return state;
};

export const initialState = {
  people: [
    {
      id: 1,
      name: 'Hamad',
    },
    {
      id: 2,
      name: 'Fahad',
    },
  ],
  numberOfPeople: 2,
};
