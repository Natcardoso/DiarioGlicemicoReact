import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ModalSuccess from "../../components/MessageValidation/Success";
import MenuSteps from "../../components/StepsRegister/MenuSteps";
import Step1 from "../../components/StepsRegister/Step1";
import Step2 from "../../components/StepsRegister/Step2";
import Step3 from "../../components/StepsRegister/Step3";
import { ReactComponent as LogoP1 } from "../../assets/stepOne.svg";
import { ReactComponent as LogoP2 } from "../../assets/stepTwo.svg";
import { ReactComponent as LogoP3 } from "../../assets/stepThree.svg";
import * as s from "./styles";
import { StateMachineProvider } from "little-state-machine";
import Waves from "../../components/Waves";

export type DataProps = {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    age: number;
    cel: number;
    sex: string;
    peso: number;
    alt: number;
    insulina: string;
    typeDiabete: string;
};

const Register = () => {
    const [pageStep, setPageStep] = useState<number>(0);

    const PageDisplay = () => {
        if (pageStep === 0) {
            return <Step1 setPageStep={setPageStep} />;
        } else if (pageStep === 1) {
            return <Step2 setPageStep={setPageStep} />;
        } else {
            return <Step3 setPageStep={setPageStep} />;
        }
    };

    return (
        <StateMachineProvider>
            <s.Container>
                <Waves />
                <s.ContainerForm>
                    <s.ContainerLogo>
                        {(pageStep === 0 && <LogoP1 />) ||
                            (pageStep === 1 && <LogoP2 />) ||
                            (pageStep === 2 && (
                                <LogoP3
                                    style={{ width: "70%", height: "70%" }}
                                />
                            ))}
                    </s.ContainerLogo>
                    <s.ContainerStep>
                        <MenuSteps pageStep={pageStep} />
                        <PageDisplay />
                    </s.ContainerStep>
                </s.ContainerForm>
            </s.Container>
        </StateMachineProvider>
    );
};

export default Register;
