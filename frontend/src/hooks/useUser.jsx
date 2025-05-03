const useUser = () => {
  const user = localStorage.getItem("userInstaMart");
  console.log(user);
  return user ? JSON.parse(user) : null;
};

export default useUser;
