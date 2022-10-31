import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:boerder-box;
        margin: 0;
        padding: 0;
    }
    a{
         text-decoration:none;
         color:inherit;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        height: 100%;
        background-color: white;
    }
    button{
        border: 0;
        outline: 0;
    }
    input{
        outline: 0;
    }
`;

export default GlobalStyles;
