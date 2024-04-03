/**
 * Retrieves the user ID from the local storage.
 * @returns {string|null} The user ID if available, otherwise null.
 */
const getUserId = () => {
  const user = localStorage.getItem("user");
  const userObj = user ? JSON.parse(user) : {};
  const userId = userObj && userObj.id ? userObj.id : "";
  if (userId) {
    return userId;
  }
  return null;
};

/**
 * Checks if a user is logged in.
 * @returns {boolean} Returns true if the user is logged in, false otherwise.
 */
const isUserLoggedIn = () => {
  const user = localStorage.getItem("user");
  const userObj = user ? JSON.parse(user) : {};
  const userId = userObj && userObj.id ? userObj.id : "";
  if (userId) {
    return true;
  }
  return false;
};
export { getUserId, isUserLoggedIn };
