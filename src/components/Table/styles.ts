import styled from "styled-components";

export const ContainerTable = styled.div`
    padding: 2rem;
    border-radius: 20px;
    background: #dee8fe91;
    margin: 1rem 2rem;
    position: relative;

    p {
        font-size: 28px;
        color: var(--blue-dark);
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .title {
        color: var(--blue-dark);
        font-size: 32px;
        font-weight: 600;
    }

    .buttonAdd {
        display: flex;
        align-items: center;
        position: absolute;
        top: 2.5rem;
        right: 1rem;
        padding: 0.3rem 0;

        button {
            padding-right: 1rem;
            cursor: pointer;
            background-color: transparent;

            svg {
                border-radius: 50px;
                background-color: var(--blue-dark);
                margin-right: 0.5rem;
                color: white;
            }
        }

        span {
            font-weight: 600;
            font-size: 20px;
        }
    }

    .tooltip {
        text-align: center;
        font-size: 16px !important;
        position: absolute;
        top: -2rem;
        right: 0rem;
        background: var(--fundoModal);
        padding: 2px 8px;
        color: #fff;
        border-radius: 4px;
        display: none;
        width: max-content;
    }

    .buttonAdd:hover .tooltip {
        display: block;
    }
`;

export const ContainerFilter = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    position: relative;

    div:nth-child(1) {
        display: flex;
        align-items: center;
        width: 35%;
        background: white;
        padding: 0.3rem;
        border-radius: 20px;

        svg {
            margin-right: 1rem;
            color: var(--blue-dark);
        }
    }
`;

export const ModalDelet = styled.div`
    background: white;
    width: 40%;
    height: max-content;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;

    svg {
        width: 50%;
    }

    span {
        color: var(--gray-medium);
        font-weight: 300;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
            padding: 0.5rem;
            border-radius: 10px;
            margin-right: 1rem;
            background: var(--blue-dark);
            color: white;
            font-size: 1rem;
            width: 30%;
            font-weight: 500;
            cursor: pointer;

            :hover {
                opacity: 0.8;
            }
        }
    }
`;
