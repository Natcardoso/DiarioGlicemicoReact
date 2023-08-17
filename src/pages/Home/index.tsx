import React from "react";
import { useNavigate } from "react-router-dom";
import MenuHome from "../../components/MenuHome";
import Waves from "../../components/Waves";
import { ReactComponent as IconHome } from "../../assets/iconHome.svg";
import * as s from "./styles";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ height: "100vh", overflow: "hidden" }}>
            <MenuHome />
            <Waves />
            <s.Container>
                <s.ContainerText>
                    <p>Você disse controle de glicemia para diabéticos?</p>
                    <span>
                        O "nome do site" vem para facilitar sua vida te ajudando
                        a controlar a sua glicemia.
                    </span>
                    <button type="button" onClick={() => navigate("/entrar")}>
                        Vamos começar!
                    </button>
                </s.ContainerText>
                <IconHome />
            </s.Container>
            {/* <s.ContainerApresentation></s.ContainerApresentation> */}
        </div>
    );
};

export default Home;
