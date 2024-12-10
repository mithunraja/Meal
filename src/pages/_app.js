import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "@/assets/front/font/stylesheet.css";
import "@/assets/front/styles/style.scss";
import store from '../redux/store';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Ensure that Bootstrap JavaScript is loaded correctly
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init();
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

import { useEffect } from "react";
import { Provider } from "react-redux";

