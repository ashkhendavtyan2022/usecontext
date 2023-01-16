import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "-",
    lastName: "-",
    age: "",
    gender: "",
    position: "No Position",
    email: "",
    phone: "",
    birth: "",
    profileIMG: "",
  })

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
