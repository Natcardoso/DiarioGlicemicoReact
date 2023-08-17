import styled from "styled-components";

export const LineProgress = styled.div`
    background: var(--gray-lighter);
    height: 0.3rem;
    position: absolute;
    width: 70%;
    top: 1.5rem;
    left: 5rem;
    border-radius: 10rem;
    transition: all 0.5s ease;

    div {
        text-align: start;
        height: 0.3rem;
    }
`;

export const Steps = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 2rem;
    position: relative;
    z-index: 3;

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;

        svg {
            padding: 0.5rem;
            border-radius: 8px;
            color: var(--gray-light);
            background: #f4f4f4;
            margin-right: 0.5rem;
        }

        span {
            font-weight: 500;
            font-size: 20px;
        }
    }
`;
