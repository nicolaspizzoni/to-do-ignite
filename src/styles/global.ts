import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.colors['gray-600']};
        -webkit-font-smoothing: antialiased;
    }

    body, text-area, :no-button, input {
        font-family: 'Inter';
        font-weight: 400;
    }
`