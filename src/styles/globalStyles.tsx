import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input {
        font-family: 'Poppins', sans-serif;
        border: 0;
        outline: none;
    }

    :root{
        
    }
`;
