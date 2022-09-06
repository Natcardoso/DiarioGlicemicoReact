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
    z-index: 2;
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

    span:nth-child(2) {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 0;
    }

    span:nth-child(3) {
        font-size: 20px;
        font-weight: 300;
        color: var(--gray-medium);
    }

    div {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        margin: 1.5rem 0;

        button {
            width: 20%;
            border-radius: 8px;
            padding: 0.5rem 0;
            cursor: pointer;
            background: var(--blue);
            font-size: 20px;
            color: white;
            transition: all 0.3s ease;

            :hover {
                background: var(--blue-dark);
            }
        }

        .register {
            width: 40%;
            margin-right: 1rem;
        }
    }

    button {
        width: 20%;
        border-radius: 8px;
        padding: 0.5rem 0;
        cursor: pointer;
        background: var(--blue);
        font-size: 20px;
        color: white;
        transition: all 0.3s ease;

        :hover {
            background: var(--blue-dark);
        }
    }
`;
