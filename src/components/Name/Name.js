import './Name.css';

function Name(props) {
  // console.log(props);

  let name = props.name;
  function changeName() {
    console.log(name);
    name = 'Fahad';
    console.log(name);
  }

  return (
    <div>
      <h2 className={props.className}>{name}</h2>
      <p>Computer Programming</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default Name;
