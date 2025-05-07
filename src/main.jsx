import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CheatcodeProvider } from "./context/CheatCodeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CheatcodeProvider>
      <App />
    </CheatcodeProvider>
  </StrictMode>
);
