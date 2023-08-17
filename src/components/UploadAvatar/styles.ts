import styled, { keyframes } from "styled-components";

export const Photo = styled.div`
    width: 9rem;
    height: 9rem;
    position: relative;

    img,
    svg {
        border-radius: 50%;
        object-fit: fill;
        width: 100%;
        background-color: white;
    }
`;

export const ButtonEdit = styled.div`
    border-radius: 50%;
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0.5rem;
    bottom: 0.5rem;
    cursor: pointer;
    border: 0.5px solid var(--gray-lighter);
    background: var(--blue-dark);

    svg {
        color: white;
        background: var(--blue-dark);
    }
`;

const AnimationPopupEdit = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

export const ContainerEditPhoto = styled.div`
    position: absolute;
    background: white;
    right: 1.5rem;
    top: 13.5rem;
    width: max-content;
    height: max-content;
    padding: 1.5rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    animation: ${AnimationPopupEdit} 0.6s normal;
    z-index: 1;

    div:nth-child(1) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center !important;
        text-align: center;
    }

    div:nth-child(2) {
        button {
            margin-top: 3rem;
            width: 40%;
            border-radius: 8px;
            padding: 0.5rem;
            cursor: pointer;
            background: var(--blue);
            font-size: 20px;
            color: white;
            transition: all 0.3s ease;

            :hover {
                background: var(--blue-dark);
            }
        }
    }

    .konvajs-content {
        background: black;
        display: flex;
        align-items: center;
        text-align: center;
    }
`;
