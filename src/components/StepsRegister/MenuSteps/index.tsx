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
            <s.LineProgress>
                <div
                    style={{
                        background:
                            pageStep === 1
                                ? "var(--green)"
                                : pageStep === 2
                                ? "var(--green)"
                                : "",
                        width:
                            pageStep === 1
                                ? "50%"
                                : pageStep === 2
                                ? "100%"
                                : "auto",
                    }}
                ></div>
            </s.LineProgress>

            <div className="item">
                {pageStep === 1 || pageStep === 2 ? (
                    <BsCheckCircleFill
                        size={50}
                        color={"white"}
                        style={{ background: "var(--green)" }}
                    />
                ) : (
                    "" ||
                    (pageStep === 0 ? (
                        <FaBook
                            size={50}
                            color="var(--blue-dark)"
                            style={{ background: "var(--blue-lighter)" }}
                        />
                    ) : (
                        ""
                    ))
                )}

                <span>Cadastro</span>
            </div>
            <div className="item">
                {pageStep == 2 ? (
                    <BsCheckCircleFill
                        size={50}
                        color="white"
                        style={{ background: "var(--green)" }}
                    />
                ) : (
                    <BsFillPersonFill
                        style={{
                            background:
                                pageStep === 1 ? "var(--blue-lighter)" : "",
                            color: pageStep === 1 ? "var(--blue-dark)" : "",
                        }}
                        size={50}
                    />
                )}
                <span>Dados pessoais</span>
            </div>
            <div className="item">
                {pageStep == 2 ? (
                    <BiPlusMedical
                        size={50}
                        color="var(--blue-dark)"
                        style={{ background: "var(--blue-lighter)" }}
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
