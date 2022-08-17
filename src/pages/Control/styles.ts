import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 100vh;
`;

export const ContainerPage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const ContainerMenu = styled.div`
    width: 20%;

    span {
        font-size: 30px;
    }

    .menu {
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
        margin-left: 2rem;

        div {
            padding: 1rem;
            display: flex;
            align-items: center;
            font-size: 18px;
            cursor: pointer;
            border-radius: 20px 0 0 20px;

            svg {
                color: var(--blue-dark);
            }

            p {
                color: var(--gray-medium);
                margin-left: 2rem;
            }

            :hover {
                background: var(--blue-dark);

                p,
                svg {
                    color: white;
                }
            }
        }
    }
`;

export const DivContent = styled.div`
    width: 85%;
    border-radius: 30px 0 0 30px;
    background-color: #dee8fe4d;
`;

export const Welcome = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    background: #dee8fe91;
    margin: 1rem 2rem;
    height: 15vh;
    padding: 1rem 2rem;
    position: relative;

    div {
        display: flex;
        flex-direction: column;

        span:nth-child(1) {
            color: var(--blue-dark);
            font-size: 42px;
            font-weight: 600;
        }

        span:nth-child(2) {
            font-size: 24px;
            font-weight: 300;
            color: var(--gray-medium);
        }
    }

    img {
        position: absolute;
        bottom: 0;
        right: 2rem;
        width: 12%;
    }
`;

export const ContainerCard = styled.div`
    background: #dee8fe91;
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    padding: 2rem;
    border-radius: 20px;

    p {
        font-size: 28px;
        color: var(--blue-dark);
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
`;

export const Card = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        text-align: center;
        background-color: #c3d3f79e;
        padding: 1rem;
        width: 22%;
        height: 15vh;
        border-radius: 20px;
        cursor: pointer;

        :hover {
            background-color: var(--blue-dark);

            span {
                color: white;
            }
        }

        span {
            color: var(--blue-dark);
            font-size: 24px;
            font-weight: 700;
        }
    }
`;

export const ContainerProfile = styled.div`
    background: #c3d3f79e;
    color: var(--blue-dark);
    width: 25%;
    border-radius: 0 20px 20px 0;
`;

export const Profile = styled.div`
    padding: 2rem;
    height: 50%;

    div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3rem;
        font-size: 20px;
        font-weight: 700;

        svg:nth-child(2) {
            cursor: pointer;
        }
    }

    .user {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 24px;
        font-weight: 500;

        div:nth-child(1) {
            margin: 0;

            svg {
                margin-right: 1rem;
            }
        }

        .textDescriptionUser {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 100%;
            font-weight: 300;
            position: absolute;
            top: 12rem;
            right: 3rem;
        }
    }
`;
