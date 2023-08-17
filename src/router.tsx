import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AuthContext } from "./context/authContext";
import Control from "./pages/Control";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
    const location = useLocation();
    const { currentUser, userActive } = useContext(AuthContext);

    const ProtectRoute = ({ children }: any): JSX.Element => {
        //  setLoading(true);
        if (!currentUser && userActive === "") {
            return <Navigate to="/" />;
        }

        //  setLoading(false);

        return children;
    };

    return (
        <Routes location={location}>
            <Route index element={<Home />} />
            <Route path="/entrar" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route
                path="/home"
                element={
                    <ProtectRoute>
                        <Control />
                    </ProtectRoute>
                }
            />
        </Routes>
    );
};

export default Router;
