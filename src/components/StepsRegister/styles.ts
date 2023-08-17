import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    .stepCurrent {
        color: var(--gray-medium);
        margin-bottom: 1rem;
        font-size: 16px;
    }
`;

export const Title = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;

    span {
        color: var(--gray-medium);
        font-size: 16px;
    }
`;

export const ContainerInput = styled.div`
    margin-bottom: 1.5rem;

    p {
        font-size: 0.9rem;
        position: absolute;
        color: var(--red);
    }
`;

export const DivInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--gray-lighter);
    border-radius: 4px;
    padding: 0.4rem;

    &:focus-within {
        border: 1px solid var(--gray-light);
    }

    .iconError {
        margin-right: 0.5rem;
        color: var(--red);
    }

    input[type="date"] {
        color: var(--gray-medium);
    }

    input {
        width: 100%;
        font-size: 20px;
        border: none;
        outline: none;
        padding: 0 0.5rem;
    }

    input[type="text"]::-webkit-input-placeholder {
        color: var(--gray-dark);
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    p {
        position: absolute;
        color: var(--red);
        width: 40%;
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

    .cancel {
        background: var(--red);

        :hover {
            background: var(--red-dark);
        }
    }
`;

export const ContainerInputs = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    margin: 0 !important;

    div:nth-child(1) {
        width: 100%;
    }
`;

export const DivOptionStep2 = styled.div`
    margin: 0 !important;
    display: flex;
    gap: 0.5rem;

    input[type="radio"] {
        display: none;
    }

    label {
        text-align: center;
        width: 100%;
        cursor: pointer;
        height: 7rem;
        border: 1.5px solid var(--gray-light);
        border-radius: 8px;
        position: relative;
        color: var(--gray-medium);
        font-weight: 500;
        font-size: 18px;
        padding: 0.5rem;

        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -30%);
        }
    }

    input[type="radio"]:checked + label {
        color: var(--blue);
        border: 2px solid var(--blue-medium);
        background: var(--blue-lighterOpacity);
    }

    input:hover + label {
        color: var(--blue);
        border: 2px solid var(--blue-medium);
        background: var(--blue-lighterOpacity);
    }

    .dontSay {
        display: flex;
        color: var(--gray-medium);
        font-weight: 500;
        font-size: 18px;
        width: 100%;

        input[type="radio"] {
            display: none;
        }

        label {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: 1.5px solid var(--gray-light);
            border-radius: 8px;
        }

        input[type="radio"]:checked + label {
            color: var(--blue);
            border: 2px solid var(--blue-medium);
            background: var(--blue-lighterOpacity);
        }

        input:hover + label {
            color: var(--blue);
            border: 2px solid var(--blue-medium);
            background: var(--blue-lighterOpacity);
        }
    }
`;

export const DivOptionStep3 = styled.div`
    margin-top: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    input[type="radio"] {
        display: none;
    }

    label {
        text-align: center;
        cursor: pointer;
        border: 2px solid var(--gray-light);
        border-radius: 8px;
        color: var(--gray-medium);
        font-weight: 500;
        font-size: 18px;
        padding: 0.3rem 1.5rem;

        :hover {
            color: var(--blue);
            border: 2px solid var(--blue-medium);
            background: var(--blue-lighterOpacity);
        }
    }

    input[type="radio"]:checked + label {
        color: var(--blue);
        border: 2px solid var(--blue-medium);
        background: var(--blue-lighterOpacity);
    }
`;

export const DivSeparatorInput3 = styled.div`
    margin-bottom: 2rem;

    p {
        font-size: 0.9rem;
        position: absolute;
        color: var(--red);
    }
`;
