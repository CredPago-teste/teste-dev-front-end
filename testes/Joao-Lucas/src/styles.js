import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
        --color-background-login: #0091d4;
        --color-red: #ff5151;
        --color-background-dark: #8b8b8c;
        font-size: 80%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    
    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    button,
    textarea {
        color: var(--color-text-base);
        font: 400 1.3rem 'Roboto';
    }

    .container {
        width: 100vw;
        max-width: 700px;
        
        @media only screen and (min-width: 700px) {
          max-width: 80vw;
        }
    }

    @media (min-width: 700px) {
        :root {
            font-size: 82.5%;
        }
    }
`;