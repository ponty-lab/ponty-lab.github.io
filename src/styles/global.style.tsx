import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    #App {
        text-align: center;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open sans', sans-serif;
        background-color: white;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        background-color: #eaeef2;
    }
    #root{
        margin: 0 auto;
    }
`;
