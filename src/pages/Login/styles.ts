import styled from "styled-components";

type PropsContainer = {
    loadingActive: boolean;
};
export const Container = styled.div<PropsContainer>`
    display: flex;
    justify-content: ${({ loadingActive }) =>
        loadingActive ? "center" : "space-between"};
    align-items: center;
    margin: 0 8rem;
    height: 100vh;

    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ContainerForm = styled.div`
    width: 38%;

    h1 {
        margin-bottom: 1rem;
    }

    .textRegister {
        text-align: center;

        span {
            font-size: 18px;
            color: var(--gray-medium);
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    button {
        width: 100%;
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

export const ContainerInput = styled.div`
    padding-bottom: 2rem;

    p {
        position: absolute;
        color: var(--red);
    }
`;

export const DivInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1.5px solid var(--gray-light);
    border-radius: 8px;
    padding: 0.4rem;

    .iconError {
        margin-right: 1rem;
        color: var(--red);
    }

    input {
        font-size: 20px;
        border: none;
        outline: none;
        width: 90%;
    }

    input[type="text"]::-webkit-input-placeholder {
        color: var(--gray-dark);
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
`;
