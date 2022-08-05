import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--fundoModal);
    width: 100vw;
    height: 100vh;
`;

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 35%;
    height: 55%;
    border-radius: 10px;
    background-color: white;

    span:nth-child(2) {
        font-size: 32px;
        font-weight: 600;
    }

    span:nth-child(3) {
        font-size: 24px;
        font-weight: 300;
        color: var(--gray-medium);
    }

    svg {
        width: 50%;
    }

    button {
        width: 20%;
        border-radius: 8px;
        padding: 1rem;
        cursor: pointer;
        background: var(--blue);
        font-size: 20px;
        color: white;
        margin: 1rem 0;
        transition: all 0.3s ease;

        :hover {
            background: var(--blue-dark);
        }
    }
`;
