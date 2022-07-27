import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    height: 100vh;

    svg {
        height: 150%;
        position: fixed;
        bottom: 20rem;
        transform: rotate(-34deg);
        z-index: -1;
    }
`;