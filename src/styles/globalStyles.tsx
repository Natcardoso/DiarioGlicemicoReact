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
        text-decoration: none;
    }

    :root{
        --blue-lighterOpacity: #DEE8FEBA;
        --blue-lighter: #DEE8FE;
        --blue-light: #BFD1FA;
        --blue-medium: #7E9BF3;
        --blue: #4853E5;
        --blue-darkset: #373FAB;

        --gray-lighter: #dcd9d94f;
        --gray-light: #C5C3C6;
        --gray-medium: #808080;
        --gray-dark: #2a2929;

        --red-light:rgb(238, 75, 87);
        --red: rgb(209, 44, 56);
        --red-dark: rgb(187, 38, 49);
    }

    .fade-enter {
        opacity: 0;
        /* transform: translate(-50px); */
        z-index: 1;
    }
    .fade-enter.fade-enter-active {
     opacity: 1;
        /* transform: translate(0vh); */

        transition: opacity 300ms ease-out, transform 400ms ease-in;
    }
`;
