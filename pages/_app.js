import "styles/globals.css";
import { QuioscoProvider } from "context/QuioscoProvider.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />;
    </QuioscoProvider>
  );
}

export default MyApp;
