import { MainContextProvider } from "../context/Main";

function MyApp({ Component, router, pageProps }) {
  return (
    <MainContextProvider router={router}>
      <Component {...pageProps} />
    </MainContextProvider>
  );
}

export default MyApp;
