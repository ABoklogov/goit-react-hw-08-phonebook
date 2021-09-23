import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { contactsOperation } from 'redux/contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import PhonebookView from 'views/PhonebookView';
import { authOperations } from 'redux/auth';
import Container from 'components/Container';
import AppBar from 'components/AppBar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={RegisterView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={PhonebookView} />
      </Switch>
    </Container>
  );
};

export default App;
