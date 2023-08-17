import { SubmitHandler, useForm } from "react-hook-form";
import updateForm from "../../../utils/updateForm";
import * as s from "../styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineWoman, AiOutlineMan } from "react-icons/ai";
import {
    maskAlt,
    maskOnlyLetters,
    maskPeso,
    maskPhone,
} from "../../../utils/mask";
import { MdError } from "react-icons/md";
import { DataProps } from "../../../pages/Register/index";
import { useStateMachine } from "little-state-machine";

type Props = {
    setPageStep: React.Dispatch<React.SetStateAction<number>>;
};

const Step2 = ({ setPageStep }: Props): JSX.Element => {
    const { actions, state } = useStateMachine({ updateForm });
    const required = "Campo obrigatório!";
    const schema = yup.object({
        name: yup
            .string()
            .required(required)
            .min(3, "Nome inválido, minímo 3 caracters!"),
        age: yup.number().required(required).typeError(required),
        cel: yup
            .string()
            .required(required)
            .max(15, "O Celular deve conter no minímo 10 digitos"),
        peso: yup.number().required(required).typeError(required),
        alt: yup.number().required(required).typeError(required),
        sex: yup
            .string()
            .required(required)
            .typeError("Campo obrigatório! Selecione uma das opções"),
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
        const altValid = (): boolean | undefined => {
            if (data.alt >= 3 || data.alt <= 0.4) {
                setError("alt", {
                    type: "max",
                    message: "Altura inválida, Digite novamente!",
                });

                return true;
            }

            return false;
        };

        const pesoValid = (): boolean | undefined => {
            if (data.peso >= 200 || data.peso <= 3) {
                setError("peso", {
                    type: "max",
                    message: "Peso inválido, Digite novamente!",
                });

                return true;
            }

            return false;
        };

        const ageValid = (): boolean | undefined => {
            if (data.age < 0) {
                setError("age", {
                    type: "min",
                    message: "Essa idade não existe, Digite novamente!",
                });
                return true;
            }

            return false;
        };

        if (
            altValid() === false &&
            pesoValid() === false &&
            ageValid() === false
        ) {
            setPageStep((cur) => cur + 1);
            actions.updateForm(data);
        } else {
            return;
        }
    };

    const iconError = <MdError size={22} className="iconError" />;

    return (
        <s.Form onSubmit={handleSubmit(onSubmit)}>
            <s.Title>
                <h2>Dados pessoais</h2>
                <span>Conte mais sobre você?!</span>
            </s.Title>
            {/* nome */}
            <s.ContainerInput>
                <label>Nome e Sobrenome</label>
                <s.DivInput
                    style={{
                        border: errors.name ? "1px solid var(--red)" : "",
                    }}
                >
                    <input
                        autoFocus
                        {...register("name")}
                        onChange={(event) => {
                            const { value } = event.target;
                            event.target.value = maskOnlyLetters(value);
                        }}
                    />
                    {errors.name && iconError}
                </s.DivInput>
                <p>{errors.name?.message}</p>
            </s.ContainerInput>
            <s.ContainerInputs>
                {/* phone */}
                <s.ContainerInput>
                    <label>Celular</label>
                    <s.DivInput
                        style={{
                            border: errors.cel ? "1px solid var(--red)" : "",
                        }}
                    >
                        <input
                            maxLength={15}
                            placeholder="(00) 00000-0000"
                            {...register("cel")}
                            onChange={(event) => {
                                const { value } = event.target;
                                event.target.value = maskPhone(value);
                            }}
                        />
                        {errors.cel && iconError}
                    </s.DivInput>
                    <p>{errors.cel?.message}</p>
                </s.ContainerInput>
                {/* idade */}
                <s.ContainerInput>
                    <label>Idade</label>
                    <s.DivInput
                        style={{
                            border: errors.age ? "1px solid var(--red)" : "",
                        }}
                    >
                        <input maxLength={2} {...register("age")} />
                        {errors.age && iconError}
                    </s.DivInput>
                    <p>{errors.age?.message}</p>
                </s.ContainerInput>
                {/* peso */}
                <s.ContainerInput>
                    <label>Peso (Kg)</label>
                    <s.DivInput
                        style={{
                            border: errors.peso ? "1px solid var(--red)" : "",
                        }}
                    >
                        <input
                            placeholder="00.00"
                            maxLength={5}
                            {...register("peso")}
                            onChange={(event) => {
                                const { value } = event.target;
                                event.target.value = maskPeso(value);
                            }}
                        />
                        {errors.peso && iconError}
                    </s.DivInput>
                    <p>{errors.peso?.message}</p>
                </s.ContainerInput>
                {/* altura */}
                <s.ContainerInput>
                    <label>Altura (cm)</label>
                    <s.DivInput
                        style={{
                            border: errors.alt ? "1px solid var(--red)" : "",
                        }}
                    >
                        <input
                            placeholder="0.00"
                            maxLength={4}
                            {...register("alt")}
                            onChange={(event) => {
                                const { value } = event.target;
                                event.target.value = maskAlt(value);
                            }}
                        />
                        {errors.alt && iconError}
                    </s.DivInput>
                    <p>{errors.alt?.message}</p>
                </s.ContainerInput>
            </s.ContainerInputs>
            {/* sexo */}

            <label>Sexo</label>
            <s.DivOptionStep2>
                <input
                    type="radio"
                    {...register("sex")}
                    value="Feminino"
                    id="fem"
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
                <div className="dontSay">
                    <input type="radio" {...register("sex")} id="dontSay" />
                    <label htmlFor="dontSay">Prefiro não dizer!</label>
                </div>
                <p>{errors.sex?.message}</p>
            </s.DivOptionStep2>

            <s.ContainerButton>
                <input
                    className="back"
                    type="button"
                    onClick={() => {
                        setPageStep((cur) => cur - 1);
                    }}
                    value={"Voltar"}
                />
                <input type="submit" value={"Próximo"} />
            </s.ContainerButton>
        </s.Form>
    );
};

export default Step2;
