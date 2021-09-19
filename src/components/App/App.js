import { Switch, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { contactsOperation } from 'redux/contacts';
import PhonebookView from 'views/PhonebookView';
import Container from 'components/Container';
import AppBar from 'components/AppBar';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(contactsOperation.fetchContacts());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={PhonebookView} />
      </Switch>
    </Container>
  );
};

export default App;
