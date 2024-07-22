import React from "react";
import ReactDOM from "react-dom/client"

import App from "./App";

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

ReactDOM.createRoot(document.getElementById("react-mount")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
