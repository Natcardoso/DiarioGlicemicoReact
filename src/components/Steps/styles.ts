import styled from "styled-components";

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
        width: 80%;

        ::placeholder {
            color: var(--gray-dark);
        }
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
`;

export const ContainerButton = styled.div`
    position: absolute;
    right: 5rem;
    bottom: 2rem;

    button {
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

export const DubleInput = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 !important;
`;

export const DivSeparatorInput = styled.div`
    width: 49%;

    .dontSay {
        display: flex;
        margin-top: 1rem;
        color: var(--gray-medium);
        font-weight: 500;
        font-size: 18px;

        input[type="radio"] {
            display: none;
        }

        label {
            width: 71%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 3rem;
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

export const DivOptionStep2 = styled.div`
    margin: 0 !important;
    display: flex;

    input[type="radio"] {
        display: none;
    }

    label {
        text-align: center;
        width: 10rem;
        cursor: pointer;
        height: 7rem;
        border: 1.5px solid var(--gray-light);
        border-radius: 8px;
        position: relative;
        color: var(--gray-medium);
        font-weight: 500;
        font-size: 18px;

        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -30%);
        }

        &:not(:last-of-type) {
            margin-right: 1rem;
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
`;

export const DivOptionStep3 = styled.div`
    margin-bottom: 1rem;
    margin-top: 0.4rem;

    input[type="radio"] {
        display: none;
    }

    label {
        text-align: center;
        cursor: pointer;
        border: 1px solid var(--gray-light);
        border-radius: 8px;
        color: var(--gray-medium);
        font-weight: 500;
        font-size: 18px;
        padding: 0 1rem;

        &:not(:last-of-type) {
            margin-right: 1rem;
        }

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
