import { useState, createContext, useContext } from "react";
const MyContext = createContext();
export const useMainContext = () => useContext(MyContext);
export const MainContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const { children } = props;
  return (
    <MyContext.Provider
      value={{
        theme: theme,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
