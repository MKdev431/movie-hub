import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};
        color: #fff;
    }

    .app {
        font-family: Arial, Helvetica, sans-serif;
    }   
`;

export default GlobalStyles;
