import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 8rem;

    svg {
        margin-top: 5rem;
        width: 40%;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    p {
        font-weight: 600;
        font-size: 52px;
    }

    span {
        font-size: 24px;
        font-weight: 100;
    }

    button {
        width: 35%;
        border-radius: 8px;
        padding: 1rem;
        cursor: pointer;
        background: var(--blue);
        font-size: 20px;
        color: white;
        transition: all 0.3s ease;
        margin-top: 2rem;

        :hover {
            background: var(--blue-dark);
        }
    }
`;

export const ContainerApresentation = styled.div`
    border: 2px solid red;
    height: 100vh;
    z-index: 1;
    background-color: white;
`;
