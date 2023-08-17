import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        &::-webkit-input-placeholder {
            color: var(--gray-medium);
        }
    }

    *, button, input {
        font-family: 'Poppins', sans-serif;
        border: 0;
        outline: none;
        text-decoration: none;
    }
  
    :root{
        --blue-lighterOpacity: #E7EEFD;
        --blue-lighter: #CFDDFB;
        --blue-light: #9EB3EC;
        --blue-medium: #5C72C0;
        --blue: #3F52A1;
        --blue-dark: #283781;

        --gray-lighterOpacity: #dcd9d943;
        --gray-lighter: #dad9d9b7;
        --gray-light: #C5C3C6;
        --gray-medium: #808080;
        --gray-dark: #383838;

        --red-light:rgb(238, 75, 87);
        --red: rgb(209, 44, 56);
        --red-dark: rgb(187, 38, 49);

        --green: #7CC120;

        --fundoModal: #2a2929f2;
        --fundoControl: #eaeaeaed;

        --Option1: #b2820b;
        --Option1Background:  rgb(178 130 11 / 20%); 
        --Option2: #2BA600;
        --Option2Background: rgb(43 166 0 / 20%);
        --Option3: #394CA4;
        --Option3Background: rgb(57 76 164 / 20%);
        --Option4: #EF4141;
        --Option4Background: rgb(239 65 65 / 20%);
        --Option5: #B115BE;
        --Option5Background: rgb(177 21 190 / 20%); 

        --box-1: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    }

    .fade-enter {
        opacity: 0;
        z-index: 1;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 500ms ease-in-out, transform 400ms ease-in;
    }
`;
