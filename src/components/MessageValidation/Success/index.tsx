import * as s from "./styles";
import { ReactComponent as ImgSuccess } from "../imgs/success.svg";
import { useNavigate } from "react-router-dom";

type Props = {
    message: string;
};

const ModalSuccess = ({ message }: Props): JSX.Element => {
    const navigate = useNavigate();

    return (
        <s.ContainerModal>
            <s.Modal>
                <ImgSuccess />
                <span>Excelente!</span>
                <span>{message}</span>
                <button onClick={() => navigate("/entrar")}>Ok</button>
            </s.Modal>
        </s.ContainerModal>
    );
};

export default ModalSuccess;
