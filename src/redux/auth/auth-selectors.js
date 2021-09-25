const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUseremail = state => state.auth.user.email;
const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const authSelectors = {
  getIsLoggedIn,
  getUseremail,
  getIsRefreshingUser,
};
export default authSelectors;
