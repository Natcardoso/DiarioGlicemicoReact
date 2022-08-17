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
    width: 40%;
    height: 60%;
    border-radius: 10px;
    background-color: white;
    padding: 2rem;
    position: relative;

    .close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }

    svg:nth-child(2) {
        width: 50%;
    }

    span:nth-child(3) {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 0;
    }

    span:nth-child(4) {
        font-size: 24px;
        font-weight: 300;
        color: var(--gray-medium);
    }

    button {
        width: max-content;
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
