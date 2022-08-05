import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import Waves from "../../components/Waves";
import * as s from "./styles";
import { ReactComponent as WelcomeImg } from "./welcomeBack.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdError } from "react-icons/md";

type DataForm = {
    email: string;
    password: string;
};

const Login = () => {
    const schema = yup
        .object({
            email: yup
                .string()
                .email("Email inválido")
                .required("Campo obrigatório!"),
            password: yup
                .string()
                .required("Campo obrigatório!")
                .min(6, "A senha deve conter no minímo 6 digitos"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataForm>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<DataForm> = (data) => {
        console.log(data);
    };

    return (
        <div>
            <Waves />
            <Menu />
            <s.Container>
                <s.ContainerForm>
                    <h1>Entrar</h1>
                    <s.Form onSubmit={handleSubmit(onSubmit)}>
                        <s.ContainerInput>
                            <label>Email</label>
                            <s.DivInput
                                style={{
                                    border:
                                        errors.email && "1px solid var(--red)",
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
                                    border:
                                        errors.password &&
                                        "1px solid var(--red)",
                                }}
                            >
                                <input
                                    type="password"
                                    placeholder="A senha deve conter 6 caracters"
                                    {...register("password")}
                                    maxLength={6}
                                />
                                {errors.password && (
                                    <MdError size={22} className="iconError" />
                                )}
                            </s.DivInput>
                            <p>{errors.password?.message}</p>
                        </s.ContainerInput>

                        <button type="submit">Entrar</button>
                    </s.Form>
                    <div className="textRegister">
                        <span>
                            Vocẽ ainda não possui uma conta? {""}
                            <Link
                                to="/cadastroPasso1"
                                style={{
                                    color: "var(--red)",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                }}
                            >
                                Cadastre-se
                            </Link>
                            {""} agora!
                        </span>
                    </div>
                </s.ContainerForm>
                <WelcomeImg />
            </s.Container>
        </div>
    );
};

export default Login;
