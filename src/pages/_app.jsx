if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "../styles/index.scss";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import AppProvider from "../context/AppContext";
import { persistStore } from "redux-persist";
import SEO from "@components/seo";
import { useRef, useState } from "react";
import Preloader from "@components/common/preloader";
import { useEffect } from "react";
import AudioPlayer from "react-audio-player";
let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true); // Add this state
  const [showplayer, setshowplayer] = useState(false);
  const [state, setstate] = useState();
  const playbutton = useRef();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the desired delay in milliseconds

    return () => clearTimeout(loadingTimeout);
  }, []);

  const Playit = () => {
    var audio = new Audio("./audio/background.ogg");
    audio.play();
  };
  useEffect(() => {
    setTimeout(() => {
      Playit();
      document.addEventListener("click", () => {
        if (!showplayer) {
          console.log("log")
          setshowplayer(true);
          playbutton.current?.play()
        }
      });
    }, 1000);
  }, []);
  return (
    <>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap"
        }
      />
      <Provider store={store}>

        <audio controls={true} hidden={true} ref={playbutton} loop autoplay>
          <source src="./audio/background.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>

        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppProvider>
            {isLoading ? <Preloader /> : <Component {...pageProps} />}
            <ToastContainer />
          </AppProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
