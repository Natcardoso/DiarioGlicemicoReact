import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import GlobalStyles from "./styles/globalStyles";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Router />
        </BrowserRouter>
    );
}

export default App;
