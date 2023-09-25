const getUserId = () => {
  const user = localStorage.getItem("user");
  const userObj = user ? JSON.parse(user) : {};
  const userId = userObj && userObj.id ? userObj.id : "";
  console.log("++++");
  if (userId) {
    return userId;
  }
  return null;
};

const isUserLoggedIn = () => {
  const user = localStorage.getItem("user");
  const userObj = user ? JSON.parse(user) : {};
  const userId = userObj && userObj.id ? userObj.id : "";
  console.log("++++");
  if (userId) {
    console.log("---");
    return true;
  }
  return false;
};
export { getUserId, isUserLoggedIn };
