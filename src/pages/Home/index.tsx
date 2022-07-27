import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import Waves from "../../components/Waves";
import { ReactComponent as Logo } from "./logo.svg";
import * as s from "./styles";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Menu />
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
                <Logo />
            </s.Container>
            <s.ContainerApresentation></s.ContainerApresentation>
        </>
    );
};

export default Home;
