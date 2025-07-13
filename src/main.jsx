import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import { store } from "./assets/Components/Store/Store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// ✅ Register service worker (only in production)
if (import.meta.env.PROD) {
  serviceWorkerRegistration.register();
}
