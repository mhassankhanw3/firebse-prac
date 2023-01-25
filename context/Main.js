import { useState, createContext, useContext } from "react";
import firebase from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const MyContext = createContext();
export const useMainContext = () => useContext(MyContext);
export const MainContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const newUser = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential, "users");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error, "error");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const signIn = async (email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential, "users");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error, "error");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const { children } = props;
  return (
    <MyContext.Provider
      value={{
        func: {
          newUser,
          signIn,
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
