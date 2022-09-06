import { VscTrash } from "react-icons/vsc";
import { FiEdit2 } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import { ReactComponent as IconDelete } from "./img/logoDelet.svg";
import * as s from "./styles";
import { useContext, useState } from "react";
import MaterialTable from "@material-table/core";
import "./stylesTable.css";
import ModalFormData from "../ModalFormData";
import { Container } from "../ModalFormData/styles";
import { ValuesContext } from "../../context/ValuesForm";

const Table = () => {
    const [modalAddData, setModalAddData] = useState(false);
    const [openPopupDelete, setOpenPopupDelete] = useState(false);
    const [id, setId] = useState<number>(-1);
    const { setValuesRegisterTable, valuesRegisterTable } =
        useContext(ValuesContext);

    const confirmDelete = () => {
        setOpenPopupDelete(false);

        const data = valuesRegisterTable.filter((item: any, i: number) => {
            return i !== id;
        });

        setValuesRegisterTable(data);
    };

    var textInutil = document.querySelector(".MuiTableCell-body");
    textInutil?.setAttribute("id", "deleteText");

    return (
        <>
            <s.ContainerTable>
                <span className="title">Tabela de controle</span>
                <div className="buttonAdd">
                    <button onClick={() => setModalAddData(true)}>
                        <IoMdAddCircle size={40} />
                    </button>
                    <span className="tooltip">Adicionar</span>
                </div>
                <MaterialTable
                    title=""
                    initialFormData={{
                        date: "09/24/2022",
                        beforeOrAfter: "Antes",
                    }}
                    columns={[
                        {
                            title: "Data",
                            field: "date",
                            type: "date",
                            width: "4rem",
                        },
                        {
                            title: "Período",
                            field: "beforeOrAfter",
                            type: "string",
                            width: "4rem",
                        },
                        {
                            title: "Refeição",
                            field: "meal",
                            type: "string",
                            width: "11rem",
                        },
                        {
                            title: "Glicemia",
                            field: "glicemia",
                            type: "numeric",
                            align: "center",
                            width: "5rem",
                            sorting: false,
                        },
                        {
                            title: "Correção",
                            field: "correcao",
                            type: "numeric",
                            align: "center",
                            width: "5rem",
                            defaultSort: "asc",
                            sorting: false,
                        },
                        {
                            title: "Observações",
                            field: "obs",
                            type: "string",
                            sorting: false,
                        },
                    ]}
                    data={[...valuesRegisterTable]}
                    actions={[
                        {
                            icon: () => <FiEdit2 className="edit" />,
                            tooltip: "Editar",
                            onClick: (e, data) => {
                                setId(data.tableData.id);
                                setModalAddData(true);
                            },
                        },
                        {
                            icon: () => <VscTrash className="delete" />,
                            tooltip: "Deletar",
                            onClick: (e, data) => {
                                setId(data.tableData.id);
                                setOpenPopupDelete(true);
                            },
                        },
                    ]}
                    options={{
                        search: true,
                        searchText: "Pesquisar",
                        actionsColumnIndex: -1,
                        paginationType: "stepped",
                    }}
                />
            </s.ContainerTable>
            {modalAddData && (
                <ModalFormData id={id} setModalAddData={setModalAddData} />
            )}
            {openPopupDelete && (
                <Container>
                    <s.ModalDelet>
                        <IconDelete />
                        <h1>Tem certeza?</h1>
                        <span>
                            Se eliminar não voltará a ver este conteúdo!
                        </span>
                        <div>
                            <button type="button" onClick={confirmDelete}>
                                Sim, apagar isto!
                            </button>
                            <button
                                type="button"
                                onClick={() => setOpenPopupDelete(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </s.ModalDelet>
                </Container>
            )}
        </>
    );
};

export default Table;
