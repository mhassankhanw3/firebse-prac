import { MainContextProvider } from "../context/Main";
import "../styles/globals.css";

function MyApp({ Component, router, pageProps }) {
  return (
    <MainContextProvider router={router}>
      <Component {...pageProps} />
    </MainContextProvider>
  );
}

export default MyApp;
