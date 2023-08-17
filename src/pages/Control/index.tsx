import * as s from "./styles";
import { IoExit } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import IconWelcome from "./img/gotaSangue.png";
import IconLogo from "../../assets/logo.png";

import Table from "../../components/Table";
import { useLocation, useNavigate } from "react-router-dom";
import UploadAvatar from "../../components/UploadAvatar";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { doc, getDoc } from "firebase/firestore";

const Control = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { setUserActive, currentUser } = useContext(AuthContext);
    const [user, setUser] = useState<any>({});

    useEffect(() => {
        const getInfoUser = async () => {
            if (currentUser && currentUser.uid) {
                let docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUser(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } else {
                console.log("currentUser our uid is undefined");
            }
        };

        getInfoUser();
    }, []);

    // "https://polylab.com.br/wp-content/uploads/2021/10/glicemia.jpg"
    return (
        <s.Container>
            <s.ContainerPage>
                <s.ContainerMenu>
                    <img className="iconLogo" src={IconLogo} />
                    <s.Menu active={pathname === "/home"}>
                        <s.ContainerOptionsMenu>
                            <div>
                                <MdSpaceDashboard size={30} />
                                <p>Dashboard</p>
                            </div>
                        </s.ContainerOptionsMenu>
                        <div
                            onClick={() => {
                                signOut(auth);
                                setUserActive("");
                            }}
                        >
                            <IoExit size={30} />
                            <p>Desconectar</p>
                        </div>
                    </s.Menu>
                </s.ContainerMenu>
                <s.DivContent>
                    <s.Welcome>
                        <div>
                            <span>Olá docinho!</span>
                            <span>
                                Hoje é um ótimo dia para cuidar da sua saúde!
                            </span>
                        </div>
                        <img src={IconWelcome} />
                    </s.Welcome>

                    <Table />
                </s.DivContent>
                <s.ContainerProfile>
                    <s.Profile>
                        <div className="user">
                            <div className="infoInitial">
                                <UploadAvatar />
                                <span>{user.displayName}</span>
                            </div>
                            <s.TextDescriptionUser>
                                <div>
                                    <span>{user.typeDiabete}</span>
                                    <p>Diabete</p>
                                </div>
                                <div>
                                    <span>{user.insulina}</span>
                                    <p>Insulina</p>
                                </div>
                                <div>
                                    <span>{user.age}</span>
                                    <p>Idade</p>
                                </div>
                            </s.TextDescriptionUser>
                        </div>
                    </s.Profile>
                </s.ContainerProfile>
            </s.ContainerPage>
        </s.Container>
    );
};

{
    /* <s.ContainerCard>
    <p>Curiosidade</p>
    <s.Card>
        <div>
            <span>Os tipos de diabetes</span>
        </div>
        <div>
            <span>Exercícios para diabéticos</span>
        </div>
        <div>
            <span>Alimentos que ajudam no controle</span>
        </div>
        <div>
            <span>Dicas que todos diabéticos deveriam saber!</span>
        </div>
    </s.Card>
</s.ContainerCard>; */
}

export default Control;
