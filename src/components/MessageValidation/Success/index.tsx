import * as s from "../styles";
import { ReactComponent as ImgSuccess } from "../../../assets/success.svg";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../Loading";

type Props = {
    message: string;
    loading: boolean;
};

const ModalSuccess = ({ message, loading }: Props): JSX.Element => {
    const navigate = useNavigate();

    return (
        <s.ContainerModal>
            <s.Modal>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <ImgSuccess />
                        <span>Ebaa!</span>
                        <span>{message}</span>
                        <button
                            type="button"
                            onClick={() => navigate("/entrar")}
                        >
                            Ok
                        </button>
                    </>
                )}
            </s.Modal>
        </s.ContainerModal>
    );
};

export default ModalSuccess;
