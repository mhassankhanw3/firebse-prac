import { useState, createContext, useContext } from "react";
import firebase from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { App } from "antd";
import { useRouter } from "next/router";

const MyContext = createContext();
export const useMainContext = () => useContext(MyContext);
export const MainContextProvider = (props) => {
  const { message, modal, notification } = App.useApp();
  const [logout, setLogout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const newUser = async (email, password) => {
    setLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential, "users");
        const user = userCredential.user;
        setSuccess(true);
        setLoading(false);
        router.push("/Dashboard");
        // ...
      })
      .catch((error) => {
        setLoading(false);
        console.log(error, "error");
        const errorCode = error.code;
        const errorMessage = error.message;
        setSuccess(false);
        router.push("/signup");
        // ..
      });
    setLoading(false);
  };
  const signIn = async (email, password) => {
    setLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        setSuccess(true);
        console.log(userCredential, "users");
        const user = userCredential.user;
        setError(false);
        router.push("/Dashboard");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess(false);
        router.push("/login");
        // console.log(error.message, "error");
        setLoading(false);
        const errorCode = error.code;
        console.log(errorCode, "errorCode");

        console.log(errorMessage, "errorMessage");
        // ..
      });
    setLoading(false);
  };
  const logOut = async (email, password) => {
    setLoading(false);
    // setLoading(true);
    const auth = getAuth();
    await signOut(auth, email, password)
      .then((res) => {
        console.log(res, "logout response");
        router.push("/login");
        // Sign-out successful.
        // setLogout(message.success("Loagout"));
      })
      .catch((error) => {
        // An error happened.
        console.log(error, "logout Error");
        setLoading(false);
        setLogout(false);
        router.push("/Dashboard");
      });
  };

  const router = useRouter();
  const { children } = props;
  return (
    <MyContext.Provider 
      value={{
        error: error,
        success: success,
        setSuccess: setSuccess,
        loading: loading,
        setLoading: setLoading,
        logout: logout,
        setLogout: setLogout,
        func: {
          newUser,
          signIn,
          logOut,
        },
      }}
    > 
      {children}
    </MyContext.Provider>
  );
};
