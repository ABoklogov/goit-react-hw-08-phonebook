import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';
import s from './LoginView.module.css';

const LoginView = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);
  const isFirstRender = useRef(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [typeInput, setTypeInput] = useState('password');

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
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

  const togglePasswordVisibility = () => {
    switch (typeInput) {
      case 'password':
        return setTypeInput('text');
      case 'text':
        return setTypeInput('password');
      default:
        return;
    }
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
          type={typeInput}
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <Form.Check
          className={s.check}
          type="switch"
          id="custom-switch"
          label="Show password"
          onClick={togglePasswordVisibility}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign in
      </Button>
    </Form>
  );
};

export default LoginView;
