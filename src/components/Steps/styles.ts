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
        margin-bottom: 2rem;
    }

    div {
        margin-bottom: 2rem;

        input {
            width: 100%;
            font-size: 20px;
            padding: 0.8rem;
            background: var(--gray-lighter);
            border-radius: 8px;

            ::placeholder {
                color: var(--gray-dark);
            }
        }

        p {
            position: absolute;
            color: red;
        }
    }
`;

export const ContainerButton = styled.div`
    position: absolute;
    right: 2.5rem;
    bottom: 0;

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
            background: var(--blue-darkset);
        }
    }

    .back {
        background: var(--gray-light);

        :hover {
            background: var(--gray-medium);
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
`;

export const DivSeparatorInput = styled.div``;

export const DivOption = styled.div`
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
        border: 2px solid var(--gray-light);
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
`;
