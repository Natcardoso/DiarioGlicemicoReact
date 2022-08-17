import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Control from "./pages/Control";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
    const location = useLocation();

    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes location={location}>
                    <Route index element={<Home />} />
                    <Route path="/entrar" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/controle" element={<Control />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Router;
