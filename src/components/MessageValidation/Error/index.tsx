import React from "react";
import * as s from "../styles";
import { ReactComponent as ImgError } from "../../../assets/error.svg";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
    message: string;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    type?: string;
};

const ModalError = ({ type, message, setModalVisible }: Props): JSX.Element => {
    const navigate = useNavigate();

    return (
        <s.ContainerModal>
            <s.Modal>
                <ImgError />
                <span>OPS!</span>
                <span>{message}</span>
                {type === "cadastro" ? (
                    <div>
                        <button
                            className="register"
                            type="button"
                            onClick={() => navigate("/cadastro")}
                        >
                            Quero me cadastrar!
                        </button>
                        <button
                            className="register"
                            type="button"
                            onClick={() => setModalVisible(false)}
                        >
                            Fechar
                        </button>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => setModalVisible(false)}
                    >
                        Ok
                    </button>
                )}
            </s.Modal>
        </s.ContainerModal>
    );
};

export default ModalError;
