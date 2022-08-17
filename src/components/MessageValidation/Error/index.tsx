import React from "react";
import * as s from "../styles";
import { ReactComponent as ImgError } from "../imgs/error.svg";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
    message: string;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    type: string;
};

const ModalError = ({ type, message, setModalVisible }: Props): JSX.Element => {
    const navigate = useNavigate();

    return (
        <s.ContainerModal>
            <s.Modal>
                <IoIosCloseCircleOutline
                    size={40}
                    onClick={() => setModalVisible(false)}
                    className="close"
                />
                <ImgError />
                <span>OPS!</span>
                <span>{message}</span>
                {type === "cadastro" ? (
                    <button type="button" onClick={() => navigate("/cadastro")}>
                        Quero me cadastrar!
                    </button>
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
