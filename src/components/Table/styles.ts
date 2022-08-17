import styled from "styled-components";

export const ContainerTable = styled.div`
    padding: 2rem;
    border-radius: 20px;
    background: #dee8fe91;
    margin: 1rem 2rem;
    height: 76vh;

    p {
        font-size: 28px;
        color: var(--blue-dark);
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    table {
        background-color: white;
        width: 100%;
        overflow: hidden;
        border-collapse: collapse;
        box-shadow: 0px 0px 10px -5px var(--gray-medium);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        cursor: default;

        .thead {
            background-color: var(--blue-dark);
            color: white;

            td {
                font-size: 18px;
                padding: 1rem;
            }
        }

        .data td {
            color: var(--gray-medium);
            font-weight: 300;
            font-size: 16px;

            padding: 1rem;
        }

        .data {
            border-top: 1px solid var(--gray-lighter);

            :not(:last-child) {
                border-bottom: 1px solid var(--gray-lighter);
            }

            :hover {
                background-color: var(--gray-lighterOpacity);
            }

            svg {
                cursor: pointer;
            }

            .edit:hover {
                color: var(--green);
            }

            .closed:hover {
                color: var(--red);
            }

            /* .action {
                display: flex;
                align-items: center;
                justify-content: space-around;

                svg {
                    cursor: pointer;
                }

                svg:nth-child(1):hover {
                    color: var(--green);
                }

                svg:nth-child(2):hover {
                    color: var(--red);
                }
            } */
        }

        tr td:nth-child(1),
        tr td:nth-child(3),
        tr td:nth-child(4) {
            width: 3rem;
            text-align: center;
        }

        tr td:nth-child(2) {
            width: 14rem;
        }

        tr td:nth-child(6) {
            width: 8rem;
            text-align: center;
        }

        tr td:nth-child(7) {
            width: 4rem;
            text-align: center;
        }

        tr td:nth-child(8) {
            width: 4rem;
            text-align: center;
        }
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

    .buttonAdd {
        display: flex;
        align-items: center;
        padding: 0.3rem 0;
        padding-right: 1rem;
        cursor: pointer;
        font-weight: 500;
        font-size: 20px;
        background-color: transparent;

        svg {
            border-radius: 50px;
            background-color: var(--blue-dark);
            margin-right: 0.5rem;
            color: white;
        }
    }
`;

export const DivTable = styled.div`
    border: 2px solid red;
`;
