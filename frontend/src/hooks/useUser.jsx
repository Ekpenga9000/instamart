const useUser = () => {
  const user = localStorage.getItem("userInstaMart");
  return user ? JSON.parse(user) : null;
};

export default useUser;
