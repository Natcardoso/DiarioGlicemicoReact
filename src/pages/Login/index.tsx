import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import Waves from "../../components/Waves";
import * as s from "./styles";
import { ReactComponent as WelcomeImg } from "./welcomeBack.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdError } from "react-icons/md";
import ModalError from "../../components/MessageValidation/Error";

type DataForm = {
    email: string;
    password: string;
};

const Login = (): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false);
    const values = JSON.parse(localStorage.getItem("user")!);
    const navigate = useNavigate();
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
        const resultFindUser = values.some(
            (value: DataForm) =>
                value.email === data.email && value.password === data.password
        );

        if (resultFindUser) {
            navigate("/controle");
        } else {
            setModalVisible(true);
        }
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
                                to="/cadastro"
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
            {modalVisible && (
                <ModalError
                    setModalVisible={setModalVisible}
                    message="Você ainda não possui um cadastro."
                    type="cadastro"
                />
            )}
        </div>
    );
};

export default Login;
