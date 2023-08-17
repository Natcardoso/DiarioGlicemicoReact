import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import Router from "./router";
import GlobalStyles from "./styles/globalStyles";

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <GlobalStyles />
                <Router />
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
