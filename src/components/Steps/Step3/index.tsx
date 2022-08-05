import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Theme from "../../../pages/ThemeStep";
import * as s from "../styles";
import ModalSuccess from "../../MessageValidation/Success";

type DataForm = {
    insulina: string;
    typeDiabete: string;
};

const Step3 = () => {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataForm>();
    const onSubmit: SubmitHandler<DataForm> = (data) => console.log(data);

    return (
        <Theme>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Tratamento</h2>
                <span>
                    Me diga qual o seu método de tratamento para controlar a sua
                    diabete!
                </span>

                <label>Qual seu tipo de diabete?</label>
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
                <label>Quais medicamentos você usa? (insulina)</label>
                <s.DivOptionStep3>
                    <input
                        type="radio"
                        {...register("insulina")}
                        value="Caneta"
                        id="caneta"
                    />
                    <label htmlFor="insulina">Caneta</label>

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
                <s.ContainerButton>
                    <button
                        className="back"
                        type="button"
                        onClick={() => navigate("/cadastroPasso2")}
                    >
                        Voltar
                    </button>
                    <button type="button" onClick={() => setModalVisible(true)}>
                        Concluir cadastro
                    </button>
                </s.ContainerButton>
            </s.Form>
            {modalVisible && (
                <ModalSuccess message="Sua conta foi criada com sucesso." />
            )}
        </Theme>
    );
};

export default Step3;
