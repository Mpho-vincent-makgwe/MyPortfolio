console.log("_APP: Loading globals and state...");
import "../styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/State/Store";

export default function App({ Component, pageProps }) {
    console.log("_APP: Rendering App component...");
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}
