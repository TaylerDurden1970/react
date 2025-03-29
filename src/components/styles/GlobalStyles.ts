import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

  body {

      transition: background-color 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease-in-out;

      &:hover {
         
      }
  }
`;
