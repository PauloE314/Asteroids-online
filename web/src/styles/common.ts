import styled, { createGlobalStyle } from "styled-components";
import { dimensions } from "./global";

export const CommonStyles = createGlobalStyle`
  .container {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .centralized {
    display: flex;
    justify-content: center;
    align-items: center;
  }



  .form-item {
    background-color: transparent;
    padding: 1rem;
    margin: 1rem 0 1rem 0;

    border: 2px solid var(--color-light-light);
    font-size: 3rem;
    font-family: "VT323";
    color: var(--color-light-light);
  }

  .form-item::placeholder {
    color: var(--color-light-dark);
  }
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

export const BaseContent = styled.div`
  max-width: ${dimensions.maxWidth};
  padding: 5rem 10rem 3rem 10rem;

  @media (max-width: ${dimensions.medium}) {
    padding: 4rem 3rem;
  }
`;

export const GameTitle = styled.h1`
  font-family: "Press Start 2P";
  font-size: 4rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-light-light);
  line-height: 6rem;
`;
