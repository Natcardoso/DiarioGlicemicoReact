import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import Waves from "../../components/Waves";
import * as s from "./styles";
import { ReactComponent as Welcome } from "./welcomeBack.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type DataForm = {
    email: string;
    password: string;
};

const Login = () => {
    const schema = yup
        .object({
            email: yup.string().email().required("Campo obrigatório!"),
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
    const onSubmit: SubmitHandler<DataForm> = (data) => console.log(data);

    return (
        <div>
            <Waves />
            <Menu />
            <s.Container>
                <s.ContainerForm>
                    <h1>Entrar</h1>
                    <s.Form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                autoFocus
                                placeholder="Email"
                                type="email"
                                {...register("email")}
                            />
                            <p>{errors.email?.message}</p>
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Senha"
                                {...register("password")}
                                maxLength={6}
                            />
                            <p>{errors.password?.message}</p>
                        </div>

                        <button type="submit">Entrar</button>
                    </s.Form>
                    <span>
                        Vocẽ ainda não possui uma conta? então {""}
                        <Link
                            to="/cadastroPasso1"
                            style={{
                                color: "red",
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            cadastre-se
                        </Link>
                        {""} agora!
                    </span>
                </s.ContainerForm>
                <Welcome />
            </s.Container>
        </div>
    );
};

export default Login;
