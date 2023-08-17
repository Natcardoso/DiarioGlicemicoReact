import * as s from "../styles";
import { MdError } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DataProps } from "../../../pages/Register/index";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateForm from "../../../utils/updateForm";

type Props = {
    setPageStep: React.Dispatch<React.SetStateAction<number>>;
};

const Step1 = ({ setPageStep }: Props): JSX.Element => {
    const required = "Campo obrigatório!";
    const navigate = useNavigate();
    const { actions, state } = useStateMachine({ updateForm });
    const schema = yup.object().shape({
        email: yup.string().email("Email inválido!").required(required),
        password: yup
            .string()
            .required(required)
            .min(6, "A senha deve conter no minímo 6 dígitos"),
        confirmPassword: yup
            .string()
            .required(required)
            .min(6, "A senha deve conter no minímo 6 dígitos"),
    });

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<DataProps>({
        resolver: yupResolver(schema),
        defaultValues: state.yourDetail,
    });

    const onSubmit: SubmitHandler<DataProps> = (data) => {
        if (data.password !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "max",
                message: "A senha está incorreta, Digite novamente!",
            });
        } else {
            setPageStep((cur) => cur + 1);
            actions.updateForm(data);
        }
    };

    return (
        <s.Form onSubmit={handleSubmit(onSubmit)}>
            <s.Title>
                <h2>Cadastro</h2>
                <span>
                    Preencha os campos para obter os dados do seu acesso!
                </span>
            </s.Title>
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
                        border: errors.password ? "1px solid var(--red)" : "",
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
                        placeholder="Digite a senha novamente"
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
                <input
                    className="back"
                    type="button"
                    onClick={() => {
                        navigate("/");
                    }}
                    value={"Cancelar"}
                />
                <input type="submit" value={"Próximo"} />
            </s.ContainerButton>
        </s.Form>
    );
};

export default Step1;
