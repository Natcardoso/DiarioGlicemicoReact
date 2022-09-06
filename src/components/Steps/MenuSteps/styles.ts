import styled from "styled-components";

export const Linha1 = styled.div`
    background: var(--gray-medium);
    height: 0.1rem;
    position: absolute;
    width: 28%;
    top: 1.5rem;
    left: 5.5rem;
`;

export const Linha2 = styled.div`
    background: var(--gray-medium);
    height: 0.1rem;
    position: absolute;
    width: 28%;
    top: 1.5rem;
    right: 7.5rem;
`;

export const Steps = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    position: relative;

    div {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
            border-radius: 20%;
            padding: 10px;
            color: var(--blue-dark);
            background: var(--gray-lighterOpacity);
            margin-right: 0.5rem;
        }

        span {
            font-weight: 500;
            font-size: 20px;
        }
    }
`;
