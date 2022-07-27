import { BsFillPersonFill } from "react-icons/bs";
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
                <FaBook
                    size={60}
                    style={{
                        background:
                            active === "/cadastroPasso1" ? "#4853E5" : "",
                        color: active === "/cadastroPasso1" ? "white" : "",
                    }}
                />
                <span>Cadastro</span>
            </div>
            <div>
                <BsFillPersonFill
                    size={60}
                    style={{
                        background:
                            active === "/cadastroPasso2" ? "#4853E5" : "",
                        color: active === "/cadastroPasso2" ? "white" : "",
                    }}
                />
                <span>Dados pessoais</span>
            </div>
            <div>
                <BiPlusMedical
                    size={60}
                    style={{
                        background:
                            active === "/cadastroPasso3" ? "#4853E5" : "",
                        color: active === "/cadastroPasso3" ? "white" : "",
                    }}
                />
                <span>Tratamento</span>
            </div>
        </s.Steps>
    );
};

export default MenuSteps;
