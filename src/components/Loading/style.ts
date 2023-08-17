import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const ContainerLoading = styled.div`
    svg {
        animation: ${spin} 0.8s infinite linear;
    }
`;
