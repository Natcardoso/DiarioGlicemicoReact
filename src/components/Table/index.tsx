import { VscTrash } from "react-icons/vsc";
import { FiEdit2 } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import * as s from "./styles";
import { useState } from "react";
import ModalFormData from "../ModalFormData";

const Table = () => {
    const [modalAddData, setModalAddData] = useState(false);

    return (
        <>
            <s.ContainerTable>
                <s.ContainerFilter>
                    <div>
                        <BiSearchAlt size={40} />
                        <input type="text" placeholder="Pesquisar..." />
                    </div>
                    <button
                        className="buttonAdd"
                        onClick={() => setModalAddData(true)}
                    >
                        <IoMdAddCircle size={40} />
                        <span>Adicionar</span>
                    </button>
                </s.ContainerFilter>
                <p>Tabela de Controle</p>
                <table>
                    <tr className="thead">
                        <td>Data</td>
                        <td>Refeição</td>
                        <td>Glicose</td>
                        <td>Correção</td>
                        <td>Observações</td>
                        <td>Ações</td>
                    </tr>

                    <tr className="data">
                        <td>02/09/2022</td>
                        <td>Café da tarde</td>
                        <td>150</td>
                        <td>5</td>
                        <td>#</td>
                        <td className="action">
                            <FiEdit2 size={20} />
                            <VscTrash size={20} />
                        </td>
                    </tr>

                    <tr className="data">
                        <td>02/09/2022</td>
                        <td>Café da tarde</td>
                        <td>150</td>
                        <td>5</td>
                        <td>#</td>
                        <td className="action">
                            <FiEdit2 size={20} />
                            <VscTrash size={20} />
                        </td>
                    </tr>
                </table>
            </s.ContainerTable>
            {modalAddData && <ModalFormData />}
        </>
    );
};

export default Table;
