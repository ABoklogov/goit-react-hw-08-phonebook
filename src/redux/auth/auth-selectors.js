const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUseremail = state => state.auth.user.email;
const getIsRefreshingUser = state => state.auth.isRefreshingUser;
const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUseremail,
  getIsRefreshingUser,
  getError,
};
export default authSelectors;
