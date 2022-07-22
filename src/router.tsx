import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
