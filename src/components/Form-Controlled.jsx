import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormControlled = () => {
  // const [username, setUsername] = useState('hamad');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  // console.log('rerender');
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      navigate('/about:5');
    }, 3000);
  };

  // const changeUsername = (e) => {
  //   setUsername(e.target.value);
  // };
  // const changeEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const changePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const changeHandler = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };

  // DRY Don't Repeat yourself

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='pt-10 flex flex-col items-center gap-5'
      >
        <input
          type='text'
          name='username'
          value={user.username}
          onChange={changeHandler}
        />
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={changeHandler}
        />
        <input
          type='text'
          name='password'
          value={user.password}
          onChange={changeHandler}
        />
        <button>Submit</button>

        {submitted && (
          <div>
            <h2>{user.username}</h2>
            <h2>{user.password}</h2>
          </div>
        )}
      </form>
    </>
  );
};
export default FormControlled;
