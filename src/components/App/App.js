import { Switch } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const PhonebookView = lazy(() => import('views/PhonebookView'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute exact path="/" redirectTo="/register">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <PhonebookView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
};

export default App;
