import { NavLink } from "react-router-dom";
import { Container } from "./styles";

const MenuHome = () => {
    return (
        <Container>
            <div>
                <NavLink
                    to={"/"}
                    style={({ isActive }) => {
                        return { color: isActive ? "var(--blue-dark)" : "" };
                    }}
                >
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={"/entrar"}
                    style={({ isActive }) => {
                        return { color: isActive ? "var(--blue-dark)" : "" };
                    }}
                >
                    Acesse sua conta
                </NavLink>
                <button className={"register"}>
                    <NavLink to={"/cadastro"}>Cadastre-se</NavLink>
                </button>
            </div>
        </Container>
    );
};

export default MenuHome;
