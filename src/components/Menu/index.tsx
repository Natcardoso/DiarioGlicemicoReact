import { NavLink } from "react-router-dom";
import { Container, DivRegister } from "./styles";

const Menu = () => {
    return (
        <Container>
            <div>
                <NavLink
                    to={"/"}
                    style={({ isActive }) => {
                        return { color: isActive ? "#4853E5" : "" };
                    }}
                >
                    Home
                </NavLink>
            </div>
            <DivRegister>
                <NavLink
                    to={"/entrar"}
                    style={({ isActive }) => {
                        return { color: isActive ? "#4853E5" : "" };
                    }}
                >
                    Acesse sua conta
                </NavLink>
                <NavLink to={"/cadastro"}>Cadastre-se</NavLink>
            </DivRegister>
        </Container>
    );
};

export default Menu;
