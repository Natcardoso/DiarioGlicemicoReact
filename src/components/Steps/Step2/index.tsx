import { SubmitHandler, useForm } from "react-hook-form";
import updateForm from "../../../utils/updateForm";
import * as s from "../styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineWoman, AiOutlineMan } from "react-icons/ai";
import {
    maskAlt,
    maskOnlyLetters,
    maskOnlyNumbers,
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
    const { actions } = useStateMachine({ updateForm });
    const required = "Campo obrigatório!";
    const schema = yup.object({
        name: yup
            .string()
            .required(required)
            .min(3, "Nome inválido, minímo 3 caracters!"),
        birtDate: yup.string().required(required),
        cel: yup
            .string()
            .required(required)
            .max(15, "O Celular deve conter no minímo 9 digitos"),
        peso: yup.number().typeError("Somente números").required(required),
        // .max(4, "O Peso deve conter no minímo 4 digitos"),
        alt: yup.number().required(required).typeError("Somente números"),
        // .max(5, "A altura deve conter no minímo 5 digitos"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataProps>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<DataProps> = (data) => {
        setPageStep((cur) => cur + 1);
        actions.updateForm(data);
    };

    return (
        <s.Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Dados pessoais</h2>
            <span>Conte mais sobre você?!</span>
            <s.ContainerInput>
                <label>Nome e Sobrenome</label>
                <s.DivInput
                    style={{
                        border: errors.name ? "1px solid var(--red)" : "",
                    }}
                >
                    <input
                        autoFocus
                        type="name"
                        {...register("name")}
                        onChange={(event) => {
                            const { value } = event.target;
                            event.target.value = maskOnlyLetters(value);
                        }}
                    />
                    {errors.name && <MdError size={22} className="iconError" />}
                </s.DivInput>
                <p>{errors.name?.message}</p>
            </s.ContainerInput>
            <s.DubleInput>
                <s.DivSeparatorInput>
                    <s.ContainerInput>
                        <label>Data de nascimento</label>
                        <s.DivInput
                            style={{
                                border: errors.birtDate
                                    ? "1px solid var(--red)"
                                    : "",
                            }}
                        >
                            <input type="date" {...register("birtDate")} />
                            {errors.birtDate && (
                                <MdError size={22} className="iconError" />
                            )}
                        </s.DivInput>
                        <p>{errors.birtDate?.message}</p>
                    </s.ContainerInput>
                </s.DivSeparatorInput>
                <s.DivSeparatorInput>
                    <s.ContainerInput>
                        <label>Celular</label>
                        <s.DivInput
                            style={{
                                border: errors.cel
                                    ? "1px solid var(--red)"
                                    : "",
                            }}
                        >
                            <input
                                type="tel"
                                maxLength={15}
                                placeholder="(00) 00000-0000"
                                {...register("cel")}
                                onChange={(event) => {
                                    const { value } = event.target;
                                    event.target.value = maskPhone(value);
                                }}
                            />
                            {errors.cel && (
                                <MdError size={22} className="iconError" />
                            )}
                        </s.DivInput>
                        <p>{errors.cel?.message}</p>
                    </s.ContainerInput>
                </s.DivSeparatorInput>
            </s.DubleInput>
            <s.DubleInput>
                <s.DivSeparatorInput>
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
                    </s.DivOptionStep2>
                    <div className="dontSay">
                        <input type="radio" {...register("sex")} id="dontSay" />
                        <label htmlFor="dontSay">Prefiro não dizer!</label>
                    </div>
                </s.DivSeparatorInput>
                <s.DivSeparatorInput>
                    <s.ContainerInput>
                        <label>Peso (Kg)</label>
                        <s.DivInput
                            style={{
                                border: errors.peso
                                    ? "1px solid var(--red)"
                                    : "",
                            }}
                        >
                            <input
                                type="number"
                                placeholder="00.00"
                                // min={4}
                                {...register("peso")}
                                onChange={(event) => {
                                    const { value } = event.target;
                                    event.target.value = maskPeso(value);
                                    // maskOnlyNumbers(value);
                                }}
                            />
                            {errors.peso && (
                                <MdError size={22} className="iconError" />
                            )}
                        </s.DivInput>
                        <p>{errors.peso?.message}</p>
                    </s.ContainerInput>

                    <s.ContainerInput>
                        <label>Altura (cm)</label>
                        <s.DivInput
                            style={{
                                border: errors.alt
                                    ? "1px solid var(--red)"
                                    : "",
                            }}
                        >
                            <input
                                type="number"
                                placeholder="0.00"
                                maxLength={4}
                                {...register("alt")}
                                onChange={(event) => {
                                    const { value } = event.target;
                                    event.target.value = maskAlt(value);
                                }}
                            />
                            {errors.alt && (
                                <MdError size={22} className="iconError" />
                            )}
                        </s.DivInput>
                        <p>{errors.alt?.message}</p>
                    </s.ContainerInput>
                </s.DivSeparatorInput>
            </s.DubleInput>
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
