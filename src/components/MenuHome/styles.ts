import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 8rem;
    position: absolute;
    width: 100%;

    div {
        a {
            font-weight: 500;
            cursor: pointer;
            font-size: 22px;
            color: var(--gray-medium);
            transition: all 0.3s ease;

            :hover {
                color: var(--blue);
            }
        }
    }

    .register {
        border-radius: 8px;
        margin-left: 4rem;
        padding: 0.5rem 2rem;
        box-shadow: 4px 0 26px -2px var(--blue-medium);
        background: var(--blue);
        transition: transform 0.2s;

        a {
            color: #fff;
        }

        :hover,
        a:hover {
            transform: scale(1.1);
            color: #fff;
            background-color: var(--blue-dark);
        }
    }
`;
