import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;

    svg {
        height: 160%;
        position: fixed;
        bottom: 14rem;
        transform: rotate(-30deg);
    }
`;
