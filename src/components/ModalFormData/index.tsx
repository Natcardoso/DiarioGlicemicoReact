import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as s from "./styles";
import { MdError } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext, useEffect } from "react";
import { ValuesContext } from "../../context/ValuesForm";

type DataForm = {
    date: string;
    glicemia: number;
    meal: string;
    correcao: number;
    obs: string;
    beforeOrAfter: string;
};

type Props = {
    setModalAddData: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
};

const ModalFormData = ({ setModalAddData, id }: Props) => {
    const required = "Campo obrigatório!";
    const { setValuesRegisterTable, valuesRegisterTable } =
        useContext(ValuesContext);

    const schema = yup
        .object({
            date: yup.string().required(required),
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
    const onSubmit: SubmitHandler<DataForm> = (data) => {
        console.log(data);

        if (id < 0) {
            setValuesRegisterTable([...valuesRegisterTable, data]);
        } else {
            const dataLocalStorage = JSON.parse(
                localStorage.getItem("registerGlicemia") || ""
            );

            for (var i = 0; i < dataLocalStorage.length; i++) {
                if (id === i) {
                    valuesRegisterTable[i] = data;
                }

                localStorage.setItem("registerGlicemia", JSON.stringify(data));
            }
        }

        setModalAddData(false);
    };

    useEffect(() => {
        const editValues: any = valuesRegisterTable.find(
            (item: FormData, i: number) => {
                if (parseInt(`${id}`) === i) {
                    return item;
                }
            }
        );

        setValue("date", editValues?.date);
        setValue("glicemia", editValues?.glicemia);
        setValue("meal", editValues?.meal);
        setValue("correcao", editValues?.correcao);
        setValue("obs", editValues?.obs);
        setValue("beforeOrAfter", editValues?.beforeOrAfter);
    }, [id]);

    return (
        <s.Container>
            <s.Modal>
                <IoIosCloseCircleOutline
                    size={40}
                    onClick={() => setModalAddData(false)}
                    className="close"
                />
                <s.Form onSubmit={handleSubmit(onSubmit)}>
                    <span className="titleModal">Novo Registro</span>
                    <s.ContainerInput className="date">
                        <label>Data</label>
                        <s.DivInput
                            style={{
                                border: errors.date && "1px solid var(--red)",
                            }}
                        >
                            <input
                                autoFocus
                                type="date"
                                {...register("date")}
                            />
                            {errors.date && (
                                <MdError size={22} className="iconError" />
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
                                <span>Antes ou depois da sua refeição?</span>
                            </s.TitleOption>

                            <input
                                className="beforeOrAfterChecked"
                                type="radio"
                                {...register("beforeOrAfter")}
                                value="Antes"
                                id="before"
                            />
                            <label className="beforeOrAfter" htmlFor="before">
                                Antes
                            </label>
                            <input
                                className="beforeOrAfterChecked"
                                type="radio"
                                {...register("beforeOrAfter")}
                                value="Depois"
                                id="after"
                            />
                            <label className="beforeOrAfter" htmlFor="after">
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
                                    errors.glicemia && "1px solid var(--red)",
                            }}
                        >
                            <input maxLength={3} {...register("glicemia")} />
                            {errors.glicemia && (
                                <MdError size={22} className="iconError" />
                            )}
                        </s.DivInput>
                        <p>{errors.glicemia?.message}</p>
                    </s.ContainerInput>
                    <s.ContainerInput>
                        <label>Correção</label>
                        <s.DivInput
                            style={{
                                border:
                                    errors.correcao && "1px solid var(--red)",
                            }}
                        >
                            <input maxLength={2} {...register("correcao")} />
                            {errors.correcao && (
                                <MdError size={22} className="iconError" />
                            )}
                        </s.DivInput>
                        <p>{errors.correcao?.message}</p>
                    </s.ContainerInput>
                    <s.ContainerInput>
                        <label>Observações (Opcional)</label>
                        <s.DivInput>
                            <input type="text" {...register("obs")} />
                        </s.DivInput>
                    </s.ContainerInput>
                    <input type="submit" value={"Cadastrar registro"} />
                </s.Form>
            </s.Modal>
        </s.Container>
    );
};

export default ModalFormData;
