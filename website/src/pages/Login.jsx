import { useContext, useState } from 'react';
import Form from '../components/Form/Form';
import Loader from '../components/Loader/Loader';
import { UserContext } from '../context/userContext';

const Login = () => {
  const { dispatch } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch({ type: 'LOGIN' });
    }, 3000);
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className='container'>
        <Form onSubmit={onSubmit} header='Login' btn='Login' />
      </div>
    </>
  );
};
export default Login;
