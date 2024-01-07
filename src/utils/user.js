const getUserId = () => {
  const user = localStorage.getItem("user");
  const userObj = user ? JSON.parse(user) : {};
  const userId = userObj && userObj.id ? userObj.id : "";
  if (userId) {
    return userId;
  }
  return null;
};

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
