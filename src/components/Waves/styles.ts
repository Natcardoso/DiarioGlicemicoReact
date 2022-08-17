import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    height: 100vh;

    svg {
        height: 160%;
        position: fixed;
        bottom: 14rem;
        transform: rotate(-30deg);
        z-index: -1;
    }
`;
