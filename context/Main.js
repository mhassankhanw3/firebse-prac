import { useState, createContext, useContext } from "react";
import firebase from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const MyContext = createContext();
export const useMainContext = () => useContext(MyContext);
export const MainContextProvider = (props) => {
  const [email, setEmail] = useState("");
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
