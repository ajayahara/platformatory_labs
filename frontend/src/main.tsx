import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri:"http://localhost:5173",
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
