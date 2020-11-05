import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* --color-dark: #212130; */
    --color-dark: #17171a;
    --color-dark-light: #535364;

    --color-light-dark: rgb(153, 153, 153);
    --color-light: rgb(199, 196, 196);
    --color-light-light: rgb(255, 255, 255);

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
    border: none;
    outline: none;
    text-decoration: none;
    list-style: none;
  }

  #root {
    height: 100vh;
  }

  body {
    background-color: var(--color-dark);
    height: 100vh;
  }

  html {
    height: 100vh;
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  h1,
  h2,
  p,
  a,
  span {
    color: var(--color-light);
  }
`;

export const colors = {
  colorDark: "#17171a",
  colorDarkLight: "#535364",

  colorLightDark: "rgb(153, 153, 153)",
  colorLight: "rgb(199, 196, 196)",
  colorLightLight: "rgb(255, 255, 255)",
};

export const dimensions = {
  medium: "1000px",
  small: "700px",
  maxWidth: "150rem",
};
