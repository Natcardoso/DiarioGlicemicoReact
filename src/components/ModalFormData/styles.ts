import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--fundoModal);
    z-index: 1;
`;

export const Modal = styled.div`
    width: 40%;
    height: 85%;
    background-color: white;
    border-radius: 20px;
    padding: 2rem;
    position: relative;

    .close {
        position: absolute;
        right: 1rem;
        top: 1rem;
        color: var(--blue-dark);
        cursor: pointer;
    }
`;

export const Form = styled.form`
    .titleModal {
        font-size: 32px;
        font-weight: 600;
        color: var(--blue-dark);
    }

    input[type="submit"] {
        width: 100%;
        border-radius: 8px;
        padding: 0.5rem;
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
    margin-bottom: 2rem;

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

    input[type="date"] {
        color: var(--gray-medium);
    }

    input {
        font-size: 20px;
        border: none;
        outline: none;
        width: 100%;
    }

    input[type="text"]::-webkit-input-placeholder {
        color: var(--gray-dark);
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
`;

export const ContainerOptions = styled.div`
    margin-bottom: 2rem;

    p {
        position: absolute;
        color: var(--red);
    }

    input[type="radio"] {
        display: none;
    }

    label {
        text-align: center;
        cursor: pointer;
        border-radius: 20px;
        font-weight: 500;
        font-size: 18px;
        padding: 0.2rem 1rem;

        &:not(:last-of-type) {
            margin-right: 1rem;
        }
    }

    //café da manhã
    label:nth-child(3) {
        border: 0.5px solid var(--Option1);
        color: var(--Option1);

        :hover {
            color: var(--Option1);
            border: none;
            background: var(--Option1Background);
        }
    }
    input[type="radio"]:checked + label:nth-child(3) {
        color: var(--Option1);
        border: none;
        background: var(--Option1Background);
    }

    //almoço
    label:nth-child(5) {
        border: 0.5px solid var(--Option2);
        color: var(--Option2);

        :hover {
            color: var(--Option2);
            border: none;
            background: var(--Option2Background);
        }
    }
    input[type="radio"]:checked + label:nth-child(5) {
        color: var(--Option2);
        border: none;
        background: var(--Option2Background);
    }

    //café da tarde
    label:nth-child(7) {
        border: 0.5px solid var(--Option3);
        color: var(--Option3);

        :hover {
            color: var(--Option3);
            border: none;
            background: var(--Option3Background);
        }
    }
    input[type="radio"]:checked + label:nth-child(7) {
        color: var(--Option3);
        border: none;
        background: var(--Option3Background);
    }

    //jantar
    label:nth-child(9) {
        border: 0.5px solid var(--Option4);
        color: var(--Option4);

        :hover {
            color: var(--Option4);
            border: none;
            background: var(--Option4Background);
        }
    }
    input[type="radio"]:checked + label:nth-child(9) {
        color: var(--Option4);
        border: none;
        background: var(--Option4Background);
    }

    //outros
    label:nth-child(11) {
        border: 0.5px solid var(--Option5);
        color: var(--Option5);

        :hover {
            color: var(--Option5);
            border: none;
            background: var(--Option5Background);
        }
    }

    input[type="radio"]:checked + label:nth-child(11) {
        color: var(--Option5);
        border: none;
        background: var(--Option5Background);
    }

    .beforeOrAfter {
        color: var(--gray-medium) !important;
        border: 1px solid var(--gray-medium) !important;

        :hover {
            color: white !important;
            border: 1px solid var(--blue-dark) !important;
            background: var(--blue-dark) !important;
        }
    }

    .beforeOrAfterChecked:checked + .beforeOrAfter {
        color: white !important;
        border: 1px solid var(--blue-dark) !important;
        background: var(--blue-dark) !important;
    }
`;

export const TitleOption = styled.div`
    margin-bottom: 0.8rem;
`;

export const Options = styled.div`
    margin-bottom: 0.3rem;
`;
