import { useState } from 'react';
import styles from './Form.module.scss';

const Form = ({ header, btn, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>{header}</h2>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      </div>
      <button type='submit'>{btn}</button>
    </form>
  );
};
export default Form;
