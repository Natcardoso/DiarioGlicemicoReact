import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Theme from "../../../pages/ThemeStep";
import * as s from "../styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdError } from "react-icons/md";

type DataForm = {
    email: string;
    password: number;
    confirmPassword: number;
};

const Step1 = () => {
    const navigate = useNavigate();
    const required = "Campo obrigatório!";

    const schema = yup
        .object({
            email: yup.string().required(required).email("Email inválido!"),
            password: yup
                .string()
                .required(required)
                .min(6, "A senha deve conter no minímo 6 dígitos"),
            confirmPassword: yup
                .string()
                .required(required)
                .min(6, "A senha deve conter no minímo 6 dígitos"),
        })
        .required();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<DataForm>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<DataForm> = (data) => {
        if (data.password !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "max",
                message: "A senha está incorreta, Digite novamente!",
            });
        } else {
            navigate("/cadastroPasso2");
        }
    };

    return (
        <Theme>
            <s.Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Cadastro</h2>
                <span>
                    Preencha os campos para obter os dados do seu acesso!
                </span>
                <s.ContainerInput>
                    <label>Email</label>
                    <s.DivInput
                        style={{
                            border: errors.email && "1px solid var(--red)",
                        }}
                    >
                        <input
                            autoFocus
                            placeholder="Ex: fulano@abc.com"
                            type="email"
                            {...register("email")}
                        />
                        {errors.email && (
                            <MdError size={22} className="iconError" />
                        )}
                    </s.DivInput>
                    <p>{errors.email?.message}</p>
                </s.ContainerInput>
                <s.ContainerInput>
                    <label>Senha</label>
                    <s.DivInput
                        style={{
                            border: errors.password
                                ? "1px solid var(--red)"
                                : "",
                        }}
                    >
                        <input
                            type="password"
                            maxLength={6}
                            placeholder="A senha deve conter 6 caracters"
                            {...register("password")}
                        />
                        {errors.password && (
                            <MdError size={22} className="iconError" />
                        )}
                    </s.DivInput>
                    <p>{errors.password?.message}</p>
                </s.ContainerInput>
                <s.ContainerInput>
                    <label>Confirme sua senha</label>
                    <s.DivInput
                        style={{
                            border: errors.confirmPassword
                                ? "1px solid var(--red)"
                                : "",
                        }}
                    >
                        <input
                            type="password"
                            maxLength={6}
                            {...register("confirmPassword")}
                        />
                        {errors.confirmPassword && (
                            <MdError size={22} className="iconError" />
                        )}
                    </s.DivInput>
                    <p>{errors.confirmPassword?.message}</p>
                </s.ContainerInput>
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
