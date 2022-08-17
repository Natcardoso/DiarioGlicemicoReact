import React from "react";
import * as s from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";
import { IoExit } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import IconWelcome from "./img/gotaSangue.png";
import Table from "../../components/Table";

const Control = () => {
    return (
        <s.Container>
            <s.ContainerPage>
                <s.ContainerMenu>
                    <span>"img logo" "nome logo"</span>
                    <div className="menu">
                        <div>
                            <MdSpaceDashboard size={30} />
                            <p>Dashboard</p>
                        </div>
                        <div>
                            <BsFillTelephoneFill size={30} />
                            <p>Suporte</p>
                        </div>
                        <div>
                            <IoExit size={30} />
                            <p>Sair</p>
                        </div>
                    </div>
                </s.ContainerMenu>
                <s.DivContent>
                    <s.Welcome>
                        <div>
                            <span>Olá amigo doce!</span>
                            <span>
                                Hoje é um ótimo dia para cuidar da sua saúde!
                            </span>
                        </div>
                        <img src={IconWelcome}></img>
                    </s.Welcome>

                    <Table />
                </s.DivContent>
                <s.ContainerProfile>
                    <s.Profile>
                        <div>
                            <span>Meu perfil</span>
                            <RiEditCircleFill size={30} />
                        </div>
                        <div className="user">
                            <div>
                                <FaUserCircle size={90} />
                                <span>Natália A Cardoso</span>
                            </div>
                            <div className="textDescriptionUser">
                                <span>Diabete tipo 1</span>
                                <span>20 anos</span>
                            </div>
                        </div>
                    </s.Profile>
                </s.ContainerProfile>
            </s.ContainerPage>
        </s.Container>
    );
};

{
    /* <s.ContainerCard>
    <p>Curiosidade</p>
    <s.Card>
        <div>
            <span>Os tipos de diabetes</span>
        </div>
        <div>
            <span>Exercícios para diabéticos</span>
        </div>
        <div>
            <span>Alimentos que ajudam no controle</span>
        </div>
        <div>
            <span>Dicas que todos diabéticos deveriam saber!</span>
        </div>
    </s.Card>
</s.ContainerCard>; */
}

export default Control;
