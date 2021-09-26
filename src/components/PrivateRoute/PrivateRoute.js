import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, redirectTo = '/login', ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
