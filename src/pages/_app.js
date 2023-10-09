"use client"
import "@/styles/globals.css";
import { wrapper } from "../redux/store";
import { Poppins } from "next/font/google";
import ErrorBoundary from "../../components/ErrorBoundry";
import { Provider } from "react-redux";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <ErrorBoundary>
        <Provider store={store}>
          <Component {...props.pageProps} />
        </Provider>
      </ErrorBoundary>
    </>
  );
};
export default App;
