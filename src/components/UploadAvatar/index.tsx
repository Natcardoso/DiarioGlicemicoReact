import { useState } from "react";
import Avatar from "react-avatar-edit";
import { ButtonEdit, ContainerEditPhoto, Photo } from "./styles";
import { GoPencil } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import "./styles.css";

const UploadAvatar = () => {
    const [preview, setPreview] = useState<string>("");
    const [openPopupEditProfile, setOpenPopupEditProfile] =
        useState<boolean>(false);
    const [selectPhoto, setSelectPhoto] = useState<boolean>(false);
    const [imageSrc, setImageSrc] = useState<string>("");

    const onClose = () => {
        setPreview("");
    };

    const onCrop = (view: string) => {
        setPreview(view);
    };

    const getData = (imageSrc: string) => {
        setImageSrc(imageSrc);
        console.log(imageSrc);
    };

    const savePhoto = () => {
        getData(preview);
        setSelectPhoto(true);
        setOpenPopupEditProfile(false);
    };

    return (
        <div>
            <Photo>
                {selectPhoto && imageSrc ? (
                    <img src={imageSrc} />
                ) : (
                    <img src="https://thumbs.dreamstime.com/b/linha-preta-cont%C3%ADnua-%C3%ADcone-do-avatar-perfil-de-usu%C3%A1rio-134114335.jpg" />
                )}
                <ButtonEdit
                    onClick={() =>
                        setOpenPopupEditProfile(!openPopupEditProfile)
                    }
                >
                    {openPopupEditProfile ? (
                        <IoCloseSharp size={20} />
                    ) : (
                        <GoPencil size={15} />
                    )}
                </ButtonEdit>
            </Photo>
            {openPopupEditProfile && (
                <ContainerEditPhoto>
                    <Avatar
                        label="Clique aqui para adicionar uma foto"
                        imageWidth={300}
                        width={300}
                        height={300}
                        onCrop={onCrop}
                        onClose={onClose}
                    />
                    <div>
                        <button
                            type="button"
                            onClick={savePhoto}
                            disabled={!preview}
                        >
                            Salvar
                        </button>
                    </div>
                </ContainerEditPhoto>
            )}
        </div>
    );
};

export default UploadAvatar;
