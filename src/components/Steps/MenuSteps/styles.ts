import styled from "styled-components";

export const Steps = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--gray-light);

    div {
        display: flex;
        align-items: center;
        margin-right: 4rem;
        flex-direction: column;

        svg {
            border-radius: 20%;
            padding: 10px;
            color: var(--blue-dark);
            background: var(--gray-lighterOpacity);
            /* margin-right: 0.5rem; */
        }

        span {
            font-weight: 500;
            font-size: 20px;
        }
    }
`;
