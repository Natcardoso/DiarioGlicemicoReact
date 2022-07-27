import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 8rem;
    height: 100vh;

    svg {
        margin-top: 10rem;
    }
`;

export const ContainerForm = styled.div`
    width: 40%;
    text-align: center;

    h1 {
        margin-bottom: 1rem;
    }

    span {
        font-size: 18px;
        color: var(--gray-medium);
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

    div {
        width: 100%;
        margin-bottom: 3rem;
        position: relative;

        input {
            width: 100%;
            font-size: 20px;
            padding: 1rem;
            background: var(--gray-lighter);
            border-radius: 8px;

            ::placeholder {
                color: var(--gray-dark);
            }
        }

        p {
            position: absolute;
            right: 0;
            color: red;
        }
    }

    button {
        width: 100%;
        border-radius: 8px;
        padding: 1rem;
        cursor: pointer;
        background: var(--blue);
        font-size: 20px;
        color: white;
        margin-bottom: 1rem;
        transition: all 0.3s ease;

        :hover {
            background: var(--blue-darkset);
        }
    }
`;
