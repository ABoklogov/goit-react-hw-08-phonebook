import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';
import s from './LoginView.module.css';

const LoginView = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (error) {
      toast.error(error, { theme: 'colored' });
    }
  }, [error]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form className={s.loginForm} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign in
      </Button>
    </Form>
  );
};

export default LoginView;
