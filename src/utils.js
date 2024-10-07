export const fetchUser = () => {
  const posibleUserState = [
    { isLoggedIn: false },
    { isLoggedIn: true },
    { isLoggedIn: true, username: "" }
  ];

  return posibleUserState[Math.floor(Math.random() * posibleUserState.length)];
};
