import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ValuesProvider } from "./context/ValuesForm";
import Router from "./router";
import GlobalStyles from "./styles/globalStyles";

function App() {
    return (
        <ValuesProvider>
            <BrowserRouter>
                <GlobalStyles />
                <Router />
            </BrowserRouter>
        </ValuesProvider>
    );
}

export default App;
