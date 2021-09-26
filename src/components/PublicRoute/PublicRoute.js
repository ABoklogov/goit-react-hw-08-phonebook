import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/contacts',
  ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

PublicRoute.propTypes = {
  children: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};

export default PublicRoute;
