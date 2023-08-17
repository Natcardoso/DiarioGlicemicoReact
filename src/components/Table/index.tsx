import { VscTrash } from "react-icons/vsc";
import { FiEdit2 } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import { ReactComponent as IconDelete } from "../../assets/iconDelete.svg";
import * as s from "./styles";
import { useContext, useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import "./stylesTable.css";
import ModalFormTable from "../ModalFormTable";
import { Container } from "../ModalFormTable/styles";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/authContext";

const Table = () => {
    const [modalAddData, setModalAddData] = useState(false);
    const [openPopupDelete, setOpenPopupDelete] = useState(false);
    const [id, setId] = useState(-1);
    const [nameAction, setNameAction] = useState("");
    const [values, setValues] = useState<any[]>([]);
    const { currentUser } = useContext(AuthContext);

    const fetchData = async () => {
        if (currentUser && currentUser.uid) {
            const result = await getDoc(doc(db, "users", currentUser.uid));
            const data = result.data();
            debugger;
            console.log(data);

            if (data?.dataGlicemia) {
                setValues(data.dataGlicemia);
            } else {
                setValues([]);
            }
        } else {
            console.log("currentUser ou uid é undefined");
        }
    };

    useEffect(() => {
        if (values.length > 0) {
            fetchData();
        }
    }, [values]);
    console.log(values);

    const confirmDelete = async () => {
        setOpenPopupDelete(false);
        try {
            // await deleteDoc(doc(db, "data", id));
        } catch (err) {}

        const data = values.filter((item: any, i: number) => {
            return item.uid !== id;
        });

        setValues(data);
    };

    return (
        <>
            <s.ContainerTable>
                <span className="title">Tabela de controle</span>
                <div className="buttonAdd">
                    <button
                        onClick={() => {
                            setModalAddData(true);
                            setNameAction("add");
                        }}
                    >
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
                    data={[values]}
                    actions={[
                        {
                            icon: () => <FiEdit2 className="edit" />,
                            tooltip: "Editar",
                            onClick: (e, data: any) => {
                                setId(data.tableData.id);
                                setNameAction("edit");
                                setModalAddData(true);
                            },
                        },
                        {
                            icon: () => <VscTrash className="delete" />,
                            tooltip: "Deletar",
                            onClick: (e, data: any) => {
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
                <ModalFormTable
                    id={id}
                    nameAction={nameAction}
                    setModalAddData={setModalAddData}
                />
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
                                className="cancel"
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
