import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ModalSuccess from "../../MessageValidation/Success";
import { DataProps } from "../../../pages/Register/index";
import * as s from "../styles";
import { useStateMachine } from "little-state-machine";
import updateForm from "../../../utils/updateForm";
import { ValuesContext } from "../../../context/ValuesForm";

type Props = {
    setPageStep: React.Dispatch<React.SetStateAction<number>>;
};

const Step3 = ({ setPageStep }: Props): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false);
    const { values, setValues } = useContext(ValuesContext);
    const required = "Campo obrigatório! Selecione uma opção.";
    const { actions, state } = useStateMachine({ updateForm });
    const schema = yup.object({
        typeDiabete: yup.string().required(required),
        insulina: yup.string().required(required),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataProps>({
        resolver: yupResolver(schema),
        defaultValues: state.yourDetail,
    });
    const onSubmit: SubmitHandler<DataProps> = (data) => {
        setModalVisible(true);
        actions.updateForm(data);
        setValues([...values, data]);
    };

    return (
        <s.Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Tratamento</h2>
            <span>
                Me diga qual o seu método de tratamento para controlar a sua
                diabete!
            </span>

            <label>Qual seu tipo de diabete?</label>
            <s.DivSeparatorInput3>
                <s.DivOptionStep3>
                    <input
                        type="radio"
                        {...register("typeDiabete")}
                        value=" Tipo 1"
                        id="typeOne"
                    />
                    <label htmlFor="typeOne">Tipo 1</label>

                    <input
                        type="radio"
                        {...register("typeDiabete")}
                        value="Tipo 2"
                        id="typeTwo"
                    />
                    <label htmlFor="typeTwo">Tipo 2</label>

                    <input
                        type="radio"
                        {...register("typeDiabete")}
                        value="Pré-diabetes"
                        id="preDiabetes"
                    />
                    <label htmlFor="preDiabetes">Pré-diabetes</label>

                    <input
                        type="radio"
                        {...register("typeDiabete")}
                        value="Gestacional"
                        id="gestational"
                    />
                    <label htmlFor="gestational">Gestacional</label>
                </s.DivOptionStep3>
                <p>{errors.typeDiabete?.message}</p>
            </s.DivSeparatorInput3>
            <s.DivSeparatorInput3>
                <label>Quais medicamentos você usa? (insulina)</label>
                <s.DivOptionStep3>
                    <input
                        type="radio"
                        {...register("insulina")}
                        value="Caneta"
                        id="caneta"
                    />
                    <label htmlFor="caneta">Caneta</label>

                    <input
                        type="radio"
                        {...register("insulina")}
                        value="Seringa"
                        id="seringa"
                    />
                    <label htmlFor="seringa">Seringa</label>

                    <input
                        type="radio"
                        {...register("insulina")}
                        value="Bomba de insulina"
                        id="insulinPump"
                    />
                    <label htmlFor="insulinPump">Bomba de insulina</label>

                    <input
                        type="radio"
                        {...register("insulina")}
                        value="Não uso insulina"
                        id="notInsulina"
                    />
                    <label htmlFor="notInsulina">Não uso insulina</label>
                </s.DivOptionStep3>
                <p>{errors.insulina?.message}</p>
            </s.DivSeparatorInput3>
            <s.ContainerButton>
                <input
                    className="back"
                    type="button"
                    onClick={() => {
                        setPageStep((cur) => cur - 1);
                    }}
                    value={"Voltar"}
                />
                <input type="submit" value={"Concluir"} />
            </s.ContainerButton>
            {modalVisible && (
                <ModalSuccess message="Sua conta foi criada com sucesso." />
            )}
        </s.Form>
    );
};

export default Step3;
