const Item = ({ name, id, removePerson }) => {
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => removePerson(id)}>Delete</button>
    </div>
  );
};
export default Item;
