import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Theme from "../../../pages/ThemeStep";
import * as s from "../styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineWoman, AiOutlineMan } from "react-icons/ai";

type DataForm = {
    name: string;
    birtDate: number;
    tel: number;
    sex: string;
};

const Step2 = () => {
    const navigate = useNavigate();

    const schema = yup
        .object({
            name: yup.string().required("Campo obrigatório"),
            birtDate: yup.string().required("Campo obrigatório"),
            tel: yup
                .number()
                .required("Campo obrigatório")
                .typeError("O campo Telefone deve conter apenas dígitos")
                .min(9, "O telefone deve conter no minímo 9 digitos"),
            // sex: yup.string().required("Campo obrigatório"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataForm>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<DataForm> = (data) => {
        navigate("/cadastroPasso3");
    };

    return (
        <Theme>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
                <span className="stepCurrent">Passo 2/3</span>
                <h2>Dados pessoais</h2>
                <span>Quais os seus dados pessoais?</span>
                <div>
                    <label>Nome completo</label>
                    <input autoFocus type="name" {...register("name")} />
                    <p>{errors.name?.message}</p>
                </div>
                <div>
                    <label>Data de nascimento</label>
                    <input type="date" {...register("birtDate")} />
                    <p>{errors.birtDate?.message}</p>
                </div>
                <s.DubleInput>
                    <s.DivSeparatorInput>
                        <label>Telefone</label>
                        <input
                            type={"tel"}
                            maxLength={9}
                            {...register("tel")}
                        />
                        <p>{errors.tel?.message}</p>
                    </s.DivSeparatorInput>

                    <s.DivSeparatorInput>
                        <label>Sexo</label>
                        <s.DivOption>
                            <input
                                type="radio"
                                {...register("sex")}
                                value="Feminino"
                                id="fem"
                                checked
                            />
                            <label htmlFor="fem">
                                Feminino
                                <AiOutlineWoman size={70} />
                            </label>
                            <input
                                type="radio"
                                {...register("sex")}
                                value="Masculino"
                                id="mas"
                            />
                            <label htmlFor="mas">
                                Masculino
                                <AiOutlineMan size={70} />
                            </label>
                        </s.DivOption>
                    </s.DivSeparatorInput>
                </s.DubleInput>
                <s.ContainerButton>
                    <button
                        className="back"
                        type="button"
                        onClick={() => navigate("/cadastroPasso1")}
                    >
                        Voltar
                    </button>
                    <button type="submit">Próximo</button>
                </s.ContainerButton>
            </s.Form>
        </Theme>
    );
};

export default Step2;
