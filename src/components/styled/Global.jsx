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
        display: flex;
        /* flex-direction: column; */
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
    color: #fff;
    font-size: 80px;
    margin-top: 20px;
    font-family: "Lobster", cursive;
    text-align: center;

    }
`;

export default GlobalStyles;
