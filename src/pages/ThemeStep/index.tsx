import { ReactComponent as LogoP1 } from "./logoPasso1.svg";
import { ReactComponent as LogoP2 } from "./logoPasso2.svg";
import { ReactComponent as LogoP3 } from "./logoPasso3.svg";
import * as s from "./styles";
import MenuSteps from "../../components/Steps/MenuSteps";
import { useLocation } from "react-router-dom";

const Theme = ({ children }: any) => {
    const location = useLocation();

    return (
        <>
            <s.Container>
                <s.ContainerForm>
                    <s.ContainerLogo>
                        {(location.pathname == "/cadastroPasso1" && (
                            <LogoP1 />
                        )) ||
                            (location.pathname === "/cadastroPasso2" && (
                                <LogoP2 />
                            )) ||
                            (location.pathname === "/cadastroPasso3" && (
                                <LogoP3 />
                            ))}
                    </s.ContainerLogo>
                    <s.ContainerStep>
                        <MenuSteps active={location.pathname} />
                        {children}
                    </s.ContainerStep>
                </s.ContainerForm>
            </s.Container>
        </>
    );
};

export default Theme;
