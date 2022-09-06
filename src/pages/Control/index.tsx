import React, { createRef, useState } from "react";
import * as s from "./styles";
import { IoExit } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import IconWelcome from "./img/gotaSangue.png";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import UploadAvatar from "../../components/UploadAvatar";

const Control = () => {
    const [popupOpenExit, setPopupOpenExit] = useState<boolean>(false);
    const navigate = useNavigate();
    const divExit = createRef<HTMLDivElement>();

    // "https://polylab.com.br/wp-content/uploads/2021/10/glicemia.jpg"
    return (
        <s.Container>
            <s.ContainerPage>
                <s.ContainerMenu>
                    <img
                        className="logo"
                        src="https://educacionendiabetes.es/wp-content/uploads/2017/09/educacionendiabetes-icono-fb.png"
                    />
                    <s.Profile>
                        <div className="user">
                            <div className="infoInitial">
                                <UploadAvatar />
                                <span>Natália Almeida</span>
                            </div>
                            <s.TextDescriptionUser>
                                <div>
                                    <span>Tipo 1</span>
                                    <p>Diabete</p>
                                </div>
                                <div>
                                    <span>Caneta</span>
                                    <p>Insulina</p>
                                </div>
                                <div>
                                    <span>20 anos</span>
                                    <p>Idade</p>
                                </div>
                            </s.TextDescriptionUser>
                        </div>
                    </s.Profile>
                    <div className="menu">
                        <div>
                            <MdSpaceDashboard size={30} />
                            <p>Dashboard</p>
                        </div>
                        <div>
                            <BsFillTelephoneFill size={30} />
                            <p>Suporte</p>
                        </div>
                        <div
                            ref={divExit}
                            onClick={(e) => {
                                setPopupOpenExit(true);
                                e.currentTarget.classList.add("active");
                            }}
                        >
                            <IoExit size={30} />
                            <p>Sair</p>
                        </div>
                    </div>
                    {popupOpenExit && (
                        <s.ContainerPop>
                            <span>Tem certeza que quer sair?</span>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => navigate("/")}
                                >
                                    Sim
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPopupOpenExit(false);
                                        divExit.current?.classList.remove(
                                            "active"
                                        );
                                    }}
                                >
                                    Não
                                </button>
                            </div>
                        </s.ContainerPop>
                    )}
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
                    {/* <s.Profile>
                        <div className="user">
                            <div className="infoInitial">
                                <UploadAvatar />
                                <span>Natália Almeida</span>
                            </div>
                            <s.TextDescriptionUser>
                                <div>
                                    <span>Tipo 1</span>
                                    <p>Diabete</p>
                                </div>
                                <div>
                                    <span>Caneta</span>
                                    <p>Insulina</p>
                                </div>
                                <div>
                                    <span>20 anos</span>
                                    <p>Idade</p>
                                </div>
                            </s.TextDescriptionUser>
                        </div>
                    </s.Profile> */}
                    {/* dashboard */}
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
