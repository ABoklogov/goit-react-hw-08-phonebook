const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;
const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshingUser,
  getError,
};
export default authSelectors;
