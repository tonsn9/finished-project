import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["gray-100"]};
    color: ${(props) => props.theme["gray-800"]};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    
    @media (max-width: 768px) {
      overflow: initial;
    }
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }
`;
