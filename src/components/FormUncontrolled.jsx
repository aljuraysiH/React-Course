import { useEffect, useRef } from 'react';

const FormUncontrolled = () => {
  const username = useRef(null);
  const form = useRef(null);

  console.log(username);

  const submitHandler = (e) => {
    e.preventDefault();
    username.current.value = '';
    console.log(username.current);
    console.log(form.current);
    form.current.classList = 'gap-10';
  };

  useEffect(() => {
    username.current.focus();
  });

  return (
    <form ref={form} className='pt-12 flex flex-col items-center gap-6'>
      <input type='text' name='username' ref={username} />
      <input type='text' name='password' />
      <button type='submit' onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};
export default FormUncontrolled;
