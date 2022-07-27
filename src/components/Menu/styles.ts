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
            color: black;
            transition: all 0.3s ease;

            :hover {
                color: var(--blue);
            }
        }
    }
`;

export const DivRegister = styled.div`
    a:nth-child(2) {
        border-radius: 10px;
        margin-left: 4rem;
        padding: 0.5rem 2rem;
        border: 2px solid var(--blue);
        box-shadow: 4px 0 26px -2px var(--blue-medium);
        color: white;
        background: var(--blue);

        :hover {
            background-color: var(--blue-lighterOpacity);
        }
    }
`;
