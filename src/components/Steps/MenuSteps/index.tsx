import { BsFillPersonFill, BsCheckCircleFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import * as s from "./styles";

type Props = {
    pageStep: number;
};

const MenuSteps = ({ pageStep }: Props) => {
    return (
        <s.Steps>
            <s.Linha1
                style={{
                    background: pageStep == 1 || pageStep == 2 ? "#35c369" : "",
                }}
            />
            <s.Linha2 style={{ background: pageStep == 2 ? "#35c369" : "" }} />
            <div>
                {pageStep == 1 || pageStep == 2 ? (
                    <BsCheckCircleFill
                        size={50}
                        color={"white"}
                        style={{ background: "#35c369" }}
                    />
                ) : (
                    "" ||
                    (pageStep == 0 ? (
                        <FaBook
                            size={50}
                            color="white"
                            style={{ background: "var(--blue-dark)" }}
                        />
                    ) : (
                        ""
                    ))
                )}

                <span>Cadastro</span>
            </div>
            <div>
                {pageStep == 2 ? (
                    <BsCheckCircleFill
                        size={50}
                        color={"white"}
                        style={{ background: "#35c369" }}
                    />
                ) : (
                    <BsFillPersonFill
                        style={{
                            background: pageStep == 1 ? "var(--blue-dark)" : "",
                            color: pageStep == 1 ? "white" : "",
                        }}
                        size={50}
                    />
                )}
                <span>Dados pessoais</span>
            </div>
            <div>
                {pageStep == 2 ? (
                    <BiPlusMedical
                        size={50}
                        color="white"
                        style={{ background: "var(--blue-dark)" }}
                    />
                ) : (
                    <BiPlusMedical size={50} />
                )}

                <span>Tratamento</span>
            </div>
        </s.Steps>
    );
};

export default MenuSteps;
