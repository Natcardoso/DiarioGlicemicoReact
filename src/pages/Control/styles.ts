import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 1rem 1rem 0;
    height: 100vh;
`;

export const ContainerPage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const ContainerMenu = styled.div`
    width: 25%;
    position: relative;

    .logo {
        width: 20%;
        padding: 0.5rem;
    }

    .menu {
        z-index: 2;
        background-color: white;
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
        margin-left: 6rem;

        div {
            padding: 1rem;
            display: flex;
            align-items: center;
            font-size: 18px;
            cursor: pointer;
            border-radius: 20px 0 0 20px;
            margin: 0.5rem 0;

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

    .active {
        background-color: var(--blue-dark);

        svg,
        p {
            color: white !important;
        }
    }
`;

const AnimationPopupExit = keyframes`
    from{
        left: 10rem;
        opacity: 0;
    }

    to {
        opacity: 1;
        left: 22rem;
    }
`;

export const ContainerPop = styled.div`
    position: fixed;
    bottom: 13.5rem;
    background-color: var(--blue-dark);
    left: 22rem;
    z-index: 1;
    width: 250px;
    color: #f7f7f7;
    padding: 0.8rem;
    border-radius: 0 20px 20px 0;
    animation: ${AnimationPopupExit} 0.5s normal;

    span {
        font-size: 16px;
    }

    div {
        display: flex;
        margin-top: 1rem;

        button {
            border-radius: 5px;
            padding: 0.3rem;
            width: 100%;
        }

        button:first-child {
            margin-right: 1rem;
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
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    background: #dee8fe91;
    margin: 1rem 2rem;
    height: 20vh;
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
        width: 14%;
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
    padding: 1rem;
    margin-top: 2rem;
    color: var(--blue-dark);

    div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

        .infoInitial {
            margin: 0;
            flex-direction: column;

            span {
                font-size: 26px;
                font-weight: 600;
                margin-top: 1rem;
            }
        }
    }
`;

export const TextDescriptionUser = styled.div`
    margin-top: 1rem;
    padding-top: 2rem;
    border-top: 1px solid var(--gray-light);
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
        font-weight: 300 !important;
        width: 100%;
        flex-direction: column;
        text-align: center;

        span {
            font-size: 18px;
            font-weight: 500;
        }

        p {
            color: var(--gray-medium);
            font-size: 14px;
        }
    }
`;
