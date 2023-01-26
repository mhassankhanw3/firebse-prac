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
  const [email, setEmail] = useState("");
  const [logout, setLogout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const newUser = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential, "users");
        const user = userCredential.user;
        router.push("/login");
        // ...
      })
      .catch((error) => {
        console.log(error, "error");
        const errorCode = error.code;
        const errorMessage = error.message;
        router.push("/");
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
        setLoading(true);

        // setSuccess(true);
        setError(false);
        router.push("/login/Dashboard");
        // setLoading(false);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess(false);
        setLoading(false);
        router.push("/login");
        // console.log(error.message, "error");
        const errorCode = error.code;
        console.log(errorCode, "errorCode");

        console.log(errorMessage, "errorMessage");
        // ..
      });
  };
  const logOut = async (email, password) => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        console.log(res);
        // Sign-out successful.
        setLogout(message.success("Loagout"));
        router.push("/signup");
      })
      .catch((error) => {
        // An error happened.
        setLogout(false);
        router.push("/");
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
