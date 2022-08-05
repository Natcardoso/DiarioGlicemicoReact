import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as s from "./styles";
import { MdError } from "react-icons/md";

type DataForm = {
    date: string;
    glicemia: number;
    meal: string;
    correcao: number;
};

const ModalFormData = () => {
    const required = "Campo obrigatório!";

    const schema = yup
        .object({
            date: yup.string(),
            // .required(required),
            glicemia: yup
                .number()
                // .required(required)
                .min(3),
            correcao: yup.number(),
        })
        .required(required);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataForm>({ resolver: yupResolver(schema) });
    const onSubmit: SubmitHandler<DataForm> = (data) => {};

    return (
        <s.Container>
            <s.Modal>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span>Novo Registro</span>
                    <s.ContainerInput>
                        <label>Data</label>
                        <s.DivInput
                            style={{
                                border: errors.date && "1px solid var(--red)",
                            }}
                        >
                            <input
                                autoFocus
                                type="date"
                                {...register("date")}
                            />
                            {errors.date && (
                                <MdError size={22} className="iconError" />
                            )}
                        </s.DivInput>
                        <p>{errors.date?.message}</p>
                    </s.ContainerInput>
                    <s.ContainerOption>
                        <input
                            type="radio"
                            {...register("meal")}
                            value="Café da manhã"
                            id="ref1"
                        />
                        <label htmlFor="ref1">Café da manhã</label>
                        <input
                            type="radio"
                            {...register("meal")}
                            value="Almoço"
                            id="ref2"
                        />
                        <label htmlFor="ref2">Almoço</label>
                        <input
                            type="radio"
                            {...register("meal")}
                            value="Café da tarde"
                            id="ref3"
                        />
                        <label htmlFor="ref3">Café da tarde</label>
                        <input
                            type="radio"
                            {...register("meal")}
                            value="Jantar"
                            id="ref4"
                        />
                        <label htmlFor="ref4">Jantar</label>
                        <input
                            type="radio"
                            {...register("meal")}
                            value="Outros"
                            id="ref5"
                        />
                        <label htmlFor="ref5">Outros</label>
                    </s.ContainerOption>
                    <s.ContainerInput>
                        <label>Glicemia</label>
                        <s.DivInput
                            style={{
                                border:
                                    errors.glicemia && "1px solid var(--red)",
                            }}
                        >
                            <input
                                type="number"
                                maxLength={3}
                                {...register("glicemia")}
                            />
                            {errors.glicemia && (
                                <MdError size={22} className="iconError" />
                            )}
                        </s.DivInput>
                        <p>{errors.glicemia?.message}</p>
                    </s.ContainerInput>
                    <s.ContainerInput>
                        <label>Correção</label>
                        <s.DivInput
                            style={{
                                border:
                                    errors.correcao && "1px solid var(--red)",
                            }}
                        >
                            <input
                                type="number"
                                maxLength={2}
                                {...register("correcao")}
                            />
                            {errors.correcao && (
                                <MdError size={22} className="iconError" />
                            )}
                        </s.DivInput>
                        <p>{errors.correcao?.message}</p>
                    </s.ContainerInput>
                    <button type="submit">aaaaaa</button>
                </form>
            </s.Modal>
        </s.Container>
    );
};

export default ModalFormData;
