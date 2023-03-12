import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import './index.css'

// Cualquier componente en react comienza con un componente


ReactDOM.createRoot( document.getElementById("root") ).render( 
    
        <React.StrictMode>
            <App />
        </React.StrictMode>
        
);