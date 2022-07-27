import React, { Children } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReactComponent as LogoRegister } from "./doctorRegister.svg";
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
                        <LogoRegister />
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
