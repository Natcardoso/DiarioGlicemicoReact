import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Theme from "../../../pages/ThemeStep";
import * as s from "../styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type DataForm = {
    email: string;
    password: number;
    confirmPassword: number;
};

const Step1 = () => {
    const navigate = useNavigate();

    const schema = yup
        .object({
            email: yup.string().required("Campo obrigatório"),
            password: yup
                .string()
                .required("Campo obrigatório")
                .min(6, "A senha deve conter no minímo 6 digitos"),
            confirmPassword: yup
                .string()
                .required("Campo obrigatório")
                .min(6, "A senha deve conter no minímo 6 digitos"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataForm>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<DataForm> = (data) => {
        navigate("/cadastroPasso2");
    };

    return (
        <Theme>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
                <span className="stepCurrent">Passo 1/3</span>
                <h2>Cadastro</h2>
                <span>
                    Preencha os campos para obter os dados do seu acesso!
                </span>
                <div>
                    <label>Email</label>
                    <input
                        autoFocus
                        placeholder=""
                        type="email"
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        type="password"
                        maxLength={6}
                        placeholder=""
                        {...register("password")}
                    />
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <label>Confirme sua senha</label>
                    <input
                        type="password"
                        maxLength={6}
                        placeholder=""
                        {...register("confirmPassword")}
                    />
                    <p>{errors.confirmPassword?.message}</p>
                </div>
                <s.ContainerButton>
                    <button
                        className="cancel"
                        type="button"
                        onClick={() => navigate("/")}
                    >
                        Cancelar
                    </button>
                    <button type="submit">Próximo</button>
                </s.ContainerButton>
            </s.Form>
        </Theme>
    );
};

export default Step1;
