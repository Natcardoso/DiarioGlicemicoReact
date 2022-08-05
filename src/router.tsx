import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Step1 from "./components/Steps/Step1";
import Step2 from "./components/Steps/Step2";
import Step3 from "./components/Steps/Step3";
import Control from "./pages/Control";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Router = () => {
    const location = useLocation();

    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/entrar" element={<Login />} />
                    <Route path="/cadastroPasso1" element={<Step1 />} />
                    <Route path="/cadastroPasso2" element={<Step2 />} />
                    <Route path="/cadastroPasso3" element={<Step3 />} />
                    <Route path="/controle" element={<Control />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Router;
