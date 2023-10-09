import "@/styles/globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const App = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
          <Component {...pageProps} />
    </>
  );
};
export default App;
