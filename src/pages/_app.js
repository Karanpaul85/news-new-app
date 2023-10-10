import { homeData } from "@/redux/actions/getNewsdata";
import { wrapper } from "../redux/store";
import "@/styles/globals.css";
// import { Poppins } from "next/font/google";
import { Provider, connect } from "react-redux";
// const poppins = Poppins({
//   weight: ["400", "500", "600"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });
const App = ({ Component, pageProps }) => {
  // const { store, props } = wrapper.useWrappedStore(rest);
  // store.dispatch(homeData());
  return (
    <>
      {/* <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style> */}
        <Component {...pageProps} />
    </>
  );
};
/**
 * Mapping redux actions
 *
 * @param {Function} dispatch dispatch function
 *
 * @returns {object} dispatch actions mapped to props
 */
const mapDispatchToProps = (dispatch) => ({
  //fetchCurrencies: (currency) => dispatch({ type: APP_CONSTANTS.FETCH_CURRENCIES_REQUESTED, payload: currency || "" }),
});

export default wrapper.withRedux(connect(null, mapDispatchToProps)(App));
