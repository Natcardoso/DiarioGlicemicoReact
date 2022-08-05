import { BsFillPersonFill, BsCheckCircleFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import * as s from "./styles";

type Props = {
    active: string;
};

const MenuSteps = ({ active }: Props) => {
    return (
        <s.Steps>
            <div>
                {active == "/cadastroPasso2" || active == "/cadastroPasso3" ? (
                    <BsCheckCircleFill
                        size={50}
                        color={"white"}
                        style={{ background: "#35c369" }}
                    />
                ) : (
                    "" ||
                    (active == "/cadastroPasso1" ? (
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
                {active == "/cadastroPasso3" ? (
                    <BsCheckCircleFill
                        size={50}
                        color={"white"}
                        style={{ background: "#35c369" }}
                    />
                ) : (
                    <BsFillPersonFill
                        style={{
                            background:
                                active == "/cadastroPasso2"
                                    ? "var(--blue-dark)"
                                    : "",
                            color: active == "/cadastroPasso2" ? "white" : "",
                        }}
                        size={50}
                    />
                )}
                <span>Dados pessoais</span>
            </div>
            <div>
                {active == "/cadastroPasso3" ? (
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
