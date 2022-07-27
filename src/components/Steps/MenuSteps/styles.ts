import styled from "styled-components";

export const Steps = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--gray-light);

    div {
        display: flex;
        align-items: center;

        svg {
            border-radius: 20%;
            padding: 10px;
            background: var(--gray-lighter);
            margin-right: 1rem;
        }

        span {
            font-size: 20px;
        }
    }
`;
