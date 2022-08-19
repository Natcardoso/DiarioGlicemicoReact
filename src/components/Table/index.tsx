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
                <s.DivTable></s.DivTable>
                <div className="tbl-header">
                    <table>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Refeição</th>
                                <th>Glicose</th>
                                <th>Correção</th>
                                <th>Observações</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className="tbl-content">
                    <table>
                        <tbody>
                            <tr>
                                <td>02/09/2022</td>
                                <td>Café da tarde</td>
                                <td>150</td>
                                <td>5</td>
                                <td>#</td>
                                <td className="edit">
                                    <FiEdit2 size={20} />
                                </td>
                                <td className="closed">
                                    <VscTrash size={20} />
                                </td>
                            </tr>
                            <tr>
                                <td>02/09/2022</td>
                                <td>Café da tarde</td>
                                <td>150</td>
                                <td>5</td>
                                <td>#</td>
                                <td>
                                    <FiEdit2 size={20} />
                                </td>
                                <td>
                                    <VscTrash size={20} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </s.ContainerTable>
            {modalAddData && (
                <ModalFormData setModalAddData={setModalAddData} />
            )}
        </>
    );
};

export default Table;
