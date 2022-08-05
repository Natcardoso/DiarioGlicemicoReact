import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 8rem;
    background: rgb(244, 243, 246);
`;

export const ContainerForm = styled.div`
    display: flex;
    background: #fff;
    height: 90%;
    width: 100%;
    border-radius: 24px;
`;

export const ContainerLogo = styled.div`
    width: 50%;
    border-radius: 24px 0 0 24px;
    background: var(--blue-dark);

    svg {
        margin-top: 8rem;
    }
`;

export const ContainerStep = styled.div`
    width: 100%;
    padding: 5rem;
    position: relative;
`;
