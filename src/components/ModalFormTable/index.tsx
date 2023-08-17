import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as s from "./styles";
import { MdError } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../../context/authContext";
import { db } from "../../firebase";
import { Loading } from "../Loading";

export type DataForm = {
    date: string;
    glicemia: number;
    meal: string;
    correcao: number;
    obs?: string;
    beforeOrAfter: string;
};

type Props = {
    setModalAddData: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
    nameAction: string;
};

const ModalFormTable = ({ setModalAddData, id, nameAction }: Props) => {
    const required = "Campo obrigatório!";
    const { currentUser } = useContext(AuthContext);
    const [valuesRegisterTable, setValuesRegisterTable] = useState<DataForm[]>(
        []
    );
    const [dateNow, setDateNow] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDoc(doc(db, "users", currentUser?.uid));
            const data = result.data();

            setValuesRegisterTable(data?.dataGlicemia);
        };
        fetchData();

        const data = new Date();
        let dateNowFormated =
            data.getFullYear() +
            "-" +
            (data.getMonth() + 1) +
            "-" +
            data.getDate();
        setDateNow(dateNowFormated);
    }, []);

    const schema = yup
        .object({
            date: yup
                .date()
                // .min("1950-11-13", "Data muito antiga, digite novamente!")
                // .max(new Date(), "Erro! Data futura, digite novamente!")
                .required(required),
            glicemia: yup
                .number()
                .required(required)
                .min(3, "No máximo 3 números")
                .typeError("Campo obrigatório! Digite apenas números"),
            correcao: yup
                .number()
                .required(required)
                .min(2, "No máxino 2 números")
                .typeError("Campo obrigatório! Digite apenas números"),
            meal: yup
                .string()
                .required(required)
                .typeError("Campo obrigatório! Escolha sua opção"),
            beforeOrAfter: yup
                .string()
                .required(required)
                .typeError("Campo obrigatório! Escolha sua opção"),
        })
        .required(required);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<DataForm>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<DataForm> = async (data) => {
        const dateFormated = new Date(data.date);
        let date =
            dateFormated.getDate() +
            "/" +
            (dateFormated.getMonth() + 1) +
            "/" +
            dateFormated.getFullYear();

        const arrayData = {
            date: date,
            glicemia: data.glicemia,
            correcao: data.correcao,
            meal: data.meal,
            beforeOrAfter: data.beforeOrAfter,
        };

        if (nameAction === "add") {
            await updateDoc(doc(db, "users", currentUser.uid), {
                dataGlicemia: arrayUnion(arrayData),
            });
        } else {
            for (var i = 0; i < valuesRegisterTable.length; i++) {
                if (id === i) {
                    valuesRegisterTable[i] = arrayData;
                }
            }
        }

        setModalAddData(false);
    };

    useEffect(() => {
        setLoading(true);
        if (nameAction === "edit") {
            try {
                const editValues: any = valuesRegisterTable.find(
                    (item: DataForm, i: number) => {
                        if (id === i) {
                            return item;
                        }
                    }
                );

                const dateFormated = new Date(editValues?.date);
                let date =
                    dateFormated.getFullYear() +
                    "-" +
                    (dateFormated.getMonth() + 1) +
                    "-" +
                    dateFormated.getDate();

                setValue("date", date);
                setValue("glicemia", editValues?.glicemia);
                setValue("meal", editValues?.meal);
                setValue("correcao", editValues?.correcao);
                setValue("obs", editValues?.obs);
                setValue("beforeOrAfter", editValues?.beforeOrAfter);
            } catch (err) {
                console.log(err);
            }
        }
        setLoading(false);
    }, [id, nameAction]);

    console.log(nameAction);

    return (
        <s.Container>
            <s.Modal>
                <IoIosCloseCircleOutline
                    size={40}
                    onClick={() => setModalAddData(false)}
                    className="close"
                />
                <s.Form onSubmit={handleSubmit(onSubmit)}>
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <span className="titleModal">Novo Registro</span>
                            <s.ContainerInput className="date">
                                <label>Data</label>
                                <s.DivInput
                                    style={{
                                        border:
                                            errors.date &&
                                            "1px solid var(--red)",
                                    }}
                                >
                                    <input
                                        autoFocus
                                        type="date"
                                        max={dateNow}
                                        {...register("date")}
                                    />
                                    {errors.date && (
                                        <MdError
                                            size={22}
                                            className="iconError"
                                        />
                                    )}
                                </s.DivInput>
                                <p>{errors.date?.message}</p>
                            </s.ContainerInput>
                            <s.ContainerOptions>
                                <s.Options>
                                    <s.TitleOption>
                                        <span>Qual a sua refeição?</span>
                                    </s.TitleOption>
                                    <input
                                        type="radio"
                                        {...register("meal")}
                                        value="Café da manhã"
                                        id="ref1"
                                    />
                                    <label htmlFor="ref1">Café da manhã</label>
                                    <input
                                        type="radio"
                                        {...register("meal")}
                                        value="Almoço"
                                        id="ref2"
                                    />
                                    <label htmlFor="ref2">Almoço</label>
                                    <input
                                        type="radio"
                                        {...register("meal")}
                                        value="Café da tarde"
                                        id="ref3"
                                    />
                                    <label htmlFor="ref3">Café da tarde</label>
                                    <input
                                        type="radio"
                                        {...register("meal")}
                                        value="Jantar"
                                        id="ref4"
                                    />
                                    <label htmlFor="ref4">Jantar</label>
                                    <input
                                        type="radio"
                                        {...register("meal")}
                                        value="Outros"
                                        id="ref5"
                                    />
                                    <label htmlFor="ref5">Outros</label>
                                </s.Options>
                                <p>{errors.meal?.message}</p>
                            </s.ContainerOptions>
                            <s.ContainerOptions>
                                <s.Options>
                                    <s.TitleOption>
                                        <span>
                                            Antes ou depois da sua refeição?
                                        </span>
                                    </s.TitleOption>

                                    <input
                                        className="beforeOrAfterChecked"
                                        type="radio"
                                        {...register("beforeOrAfter")}
                                        value="Antes"
                                        id="before"
                                    />
                                    <label
                                        className="beforeOrAfter"
                                        htmlFor="before"
                                    >
                                        Antes
                                    </label>
                                    <input
                                        className="beforeOrAfterChecked"
                                        type="radio"
                                        {...register("beforeOrAfter")}
                                        value="Depois"
                                        id="after"
                                    />
                                    <label
                                        className="beforeOrAfter"
                                        htmlFor="after"
                                    >
                                        Depois
                                    </label>
                                </s.Options>
                                <p>{errors.beforeOrAfter?.message}</p>
                            </s.ContainerOptions>
                            <s.ContainerInput>
                                <label>Glicemia</label>
                                <s.DivInput
                                    style={{
                                        border:
                                            errors.glicemia &&
                                            "1px solid var(--red)",
                                    }}
                                >
                                    <input
                                        maxLength={3}
                                        {...register("glicemia")}
                                    />
                                    {errors.glicemia && (
                                        <MdError
                                            size={22}
                                            className="iconError"
                                        />
                                    )}
                                </s.DivInput>
                                <p>{errors.glicemia?.message}</p>
                            </s.ContainerInput>
                            <s.ContainerInput>
                                <label>Correção</label>
                                <s.DivInput
                                    style={{
                                        border:
                                            errors.correcao &&
                                            "1px solid var(--red)",
                                    }}
                                >
                                    <input
                                        maxLength={2}
                                        {...register("correcao")}
                                    />
                                    {errors.correcao && (
                                        <MdError
                                            size={22}
                                            className="iconError"
                                        />
                                    )}
                                </s.DivInput>
                                <p>{errors.correcao?.message}</p>
                            </s.ContainerInput>
                            <s.ContainerInput>
                                <label>Observações (Opcional)</label>
                                <s.DivInput>
                                    <input
                                        type="text"
                                        {...register("obs")}
                                        placeholder="Ex: Hipoglicemia"
                                    />
                                </s.DivInput>
                            </s.ContainerInput>
                            <input
                                value={
                                    nameAction === "edit"
                                        ? "Atualizar registro"
                                        : "Cadastrar registro"
                                }
                                type="submit"
                            />
                        </>
                    )}
                </s.Form>
            </s.Modal>
        </s.Container>
    );
};

export default ModalFormTable;
