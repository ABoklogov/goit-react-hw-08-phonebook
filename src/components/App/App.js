import { Switch } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './App.module.css';
import { Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const PhonebookView = lazy(() => import('views/PhonebookView'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshingUser ? (
        <Spinner className={s.Spinner} animation="border" />
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense
              fallback={<Spinner className={s.Spinner} animation="border" />}
            >
              <PublicRoute exact path="/" redirectTo="/register" restricted>
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
        </>
      )}
      <ToastContainer />
    </Container>
  );
};

export default App;
