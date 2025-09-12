import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LangProvider } from "./hooks/useLang";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
