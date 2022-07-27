import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Theme from "../../../pages/ThemeStep";
import * as s from "../styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type DataForm = {
    insulina: string;
    typeDiabete: string;
};

const Step3 = () => {
    const navigate = useNavigate();

    const schema = yup
        .object({
            firstName: yup.string().required(),
            age: yup.number().positive().integer().required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataForm>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<DataForm> = (data) => console.log(data);

    return (
        <Theme>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
                <p>Passo 3/3</p>
                <h2>Tratamento</h2>
                <span>
                    Me diga qual o seu método de tratamento para controlar a sua
                    diabete!
                </span>
                <label>Qual seu tipo de diabete?</label>
                <div>
                    <input
                        type="radio"
                        {...register("typeDiabete")}
                        value=" Tipo 1"
                    ></input>
                    <input
                        type="radio"
                        {...register("typeDiabete")}
                        value="Tipo 2"
                    ></input>
                    <input
                        type="radio"
                        {...register("typeDiabete")}
                        value="Pré-diabetes"
                    ></input>
                    <input
                        type="radio"
                        {...register("typeDiabete")}
                        value="Gestacional"
                    ></input>
                </div>
                <label>Quais medicamentos você usa?</label>
                <div>
                    <p>Insulina</p>
                    <input
                        type="radio"
                        {...register("insulina")}
                        value="insulina"
                    />
                    <input
                        type="radio"
                        {...register("insulina")}
                        value="Seringa"
                    />
                    <input
                        type="radio"
                        {...register("insulina")}
                        value="Bomba de insulina"
                    />
                    <input
                        type="radio"
                        {...register("insulina")}
                        value="Não uso insulina"
                    />
                    <button type="button">Remédio</button>
                </div>
                <s.ContainerButton>
                    <button
                        className="back"
                        type="button"
                        onClick={() => navigate("/cadastroPasso2")}
                    >
                        Voltar
                    </button>
                    <button type="submit">Concluir cadastro</button>
                </s.ContainerButton>
            </s.Form>
        </Theme>
    );
};

export default Step3;
