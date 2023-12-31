import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
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
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </>
  );
};
export default App;
