import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ContainerLoading } from "./style";

export const Loading = () => {
    return (
        <ContainerLoading>
            <AiOutlineLoading3Quarters size={40} />
        </ContainerLoading>
    );
};
