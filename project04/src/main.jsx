import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Information from "./Ccontext/Information.jsx";



createRoot(document.getElementById("root")).render(
  <Information >
    <App />
  </Information>
);
