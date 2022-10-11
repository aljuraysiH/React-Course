import Form from '../components/Form/Form';

const Signup = () => {
  const onsubmit = (e) => {
    e.preventDefault();
    console.log('signup');
  };
  return (
    <div className='container'>
      <Form onSubmit={onsubmit} header='Signup' btn='Signup' />
    </div>
  );
};
export default Signup;
