import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const ContainerForm = styled.div`
    display: flex;
    background: #fff;
    height: 80%;
    width: 65%;
    border-radius: 10px;
    box-shadow: var(--box-1);
`;

export const ContainerLogo = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid var(--gray-lighter);
`;

export const ContainerStep = styled.div`
    width: 100%;
    padding: 2rem 3rem 3rem;
    position: relative;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    .stepCurrent {
        color: var(--gray-medium);
        margin-bottom: 0.5rem;
        font-size: 16px;
    }

    span {
        color: var(--gray-medium);
        font-size: 18px;
        margin-bottom: 1.5rem;
    }
`;

export const ContainerButton = styled.div`
    position: absolute;
    right: 5rem;
    bottom: 2rem;

    input {
        width: max-content;
        border-radius: 8px;
        padding: 1rem;
        cursor: pointer;
        background: var(--blue);
        font-size: 20px;
        color: white;
        transition: all 0.3s ease;
        margin-left: 1rem;

        :hover {
            background: var(--blue-dark);
        }
    }

    .back {
        background: transparent;
        color: black;

        :hover {
            background: var(--gray-lighterOpacity);
        }
    }
`;
